cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LAUNCH, () => {
    cc.StoryMaster.setStoryPlotJumpCallBack((data, next) => {
        console.log(data)
        if (data.tag === 'peiqi') {
            cc.log('佩琪佩琪');
        }
        next && next();
    });
    cc.StoryMaster.onPieceTalkOver((data) => {
    })
});


