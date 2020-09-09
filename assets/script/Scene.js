cc.Class({
    extends: cc.Component,

    properties: {
        storyMasterNode: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let node = cc.StoryMaster.initWithNode(this.storyMasterNode);
    },

    start () {

    },

    // update (dt) {},
});
