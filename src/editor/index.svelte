<script lang="ts">
    import config from './core/config.svelte'
  // pane.addInput(PARAMS, 'boolean');
  // pane.addInput(PARAMS, 'color');
  // pane.addInput(PARAMS, 'number');
  // pane.addInput(PARAMS, 'string');
</script>

<svelte:head>
</svelte:head>

<main>
    <div class="logo">
        <div class="fl logo-cnt">
            <i class="iconfont mr10">&#xe63c;</i>打印设计器&trade;
        </div>
        <div class="fl t-name">test
            <div class="save-tip">core/draft</div>
            <!--            <mx-vframe src="./core/draft" *lang="{{=lang}}" -->
            <!--                       id="draft_{{=vId}}" tag="span" class="save-tip"/>-->
        </div>
        <div class="fr mr20" id="header_btns">
            <button class="header-btn mr20">保存</button>
        </div>
    </div>

    <div style="margin-top: 200px">
        <config/>
    </div>
</main>



<style lang="less">
    .logo {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        padding: 0 10px;
        background: #06f;
        color: #ffffff;
        position: relative;
        z-index: 3000;
    }

    .body {
        height: calc(~"100% - 40px"); //less http://blog.csdn.net/playboyanta123/article/details/50408335
    }

    .canvas {
        width: calc(~"100% - 475px");
        height: calc(~"100% - 45px");
    }

    .canvas-anim {
        transition: width 0.15s;
    }

    .canvas-toolbox-collapse {
        width: calc(~"100% - 265px");
    }

    .stage {
        width: calc(~"100% - 21px");
        overflow: scroll;
        height: 100%;
        background-color: #EDEEF3;
        transition: all 0.3s;
    }

    .stage-deactive {
        box-shadow: inset 1px 1px 6px 2px #dadada;
    }

    .stage::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    .stage::-webkit-scrollbar-thumb {
        background-color: #c2c0c0;
        min-height: 25px;
        min-width: 25px;
        border: 1px solid #e0e0e0
    }

    .stage::-webkit-scrollbar-track {
        background-color: #f7f7f7;
        border: 1px solid #efefef
    }

    .toolbar {
        line-height: 25px;
        position: relative;
        z-index: 3000;
    }

    .header-btn {
        outline: none;
        color: #ffffffa5;
        border: solid 1px #ffffffa5;
        background: transparent;
        border-radius: 4px;
        height: 20px;
        line-height: 16px;
        font-size: 14px;
        padding: 2px 8px;
        width: 60px;
    }

    .header-btn:hover {
        color: #ffffff;
        border: solid 1px #ffffff;
    }

    .logo-cnt {
        width: 235px;
    }

    .t-name {
        font-size: 14px;
        line-height: 45px;
        height: 40px;
    }

    .save-tip {
        margin-left: 10px;
        color: #ffffffa5;
        font-size: 10px;
    }
</style>