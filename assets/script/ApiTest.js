cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LAUNCH, () => {
    cc.StoryMaster.setStoryPlotJumpCallBack((data, next) => {
        console.log(data)
        if (data) {

        }
        next && next();
    });
    cc.StoryMaster.onPieceTalkOver((data) => {
        debugger
    })
});


