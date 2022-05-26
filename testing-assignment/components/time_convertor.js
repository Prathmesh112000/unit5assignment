const time_convertor=(mili)=>{
    let seconds=0
    let minutes=0
    let hours=0
    if(mili>=1000){
         seconds=Math.round(mili/1000)
    }
    if(seconds>60){
        minutes=Math.round(seconds/60)
    }
    if(minutes>60){
        hours=Math.round(minutes/60)
    }

    return {second:seconds,minut:minutes,hour:hours}

}



module.exports=time_convertor