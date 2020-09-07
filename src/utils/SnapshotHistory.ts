import omit from 'lodash.omit'
const fakeUUID = () => `${+new Date()}${Math.random()}`

interface WithUid {
  uuid: string
}

/**
 * 可以传入 deep 对比函数
 */
type CompareFun<T> = (prev: T, next: T) => boolean;

class SnapshotHistory<T extends WithUid> {
  private snapshots: T[] = []
  private cursor: number = -1

  compareFun: CompareFun<T> = (prev, next) => JSON.stringify(prev) === JSON.stringify(next)

  constructor (
    private maxSnapshots = 20,
    compareFun?: CompareFun<T>
  ) {
    if (compareFun) {
      this.compareFun = compareFun
    }
  }

  get canUndo (): boolean {
    return this.cursor > 0
  }

  get canClear (): boolean {
    return this.snapshots.length > 0
  }

  get canRedo () {
    return this.snapshots.length > this.cursor + 1
  }

  record (snapshot: T) {
    if (this.checkRepeat(snapshot)) {
      return false
    }

    while (this.cursor < this.snapshots.length - 1) {
      this.snapshots.pop()
    }

    // 生成唯一的 id，确保在列表渲染时不会重用 DOM
    // 这样生成的动画更好的表现新旧历史记录的替换
    snapshot.uuid = fakeUUID()
    this.snapshots.push(snapshot)

    // 确保历史记录条数限制
    if (this.snapshots.length > this.maxSnapshots) {
      this.snapshots.shift()
    }
    this.cursor = this.snapshots.length - 1
  }

  undo () {
    if (this.canUndo) {
      this.cursor -= 1
      return this.snapshots[this.cursor]
    }
    return null
  }

  redo () {
    if (this.canRedo) {
      this.cursor += 1
      return this.snapshots[this.cursor]
    }
    return null
  }

  move (cursor: number) {
    if (this.snapshots.length > cursor) {
      this.cursor = cursor
      return this.snapshots[this.cursor]
    }
  }

  clear () {
    if (!this.canClear) {
      return
    }
    this.cursor = -1
    this.snapshots = []
  }

  checkRepeat (snapshot: T) {
    const next = snapshot
    const prev = this.cursor >= 0 ? omit(this.snapshots[this.cursor], ['uuid']) : {}
    // 如果更复杂的对象建议使用 deep equal 库
    return this.compareFun(prev as T, next)
  }
}

export default SnapshotHistory;
