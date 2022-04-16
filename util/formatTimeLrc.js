const formatTimeLrc = (time)=>{
    let result =''
    let lastMiliToSecond = 0
    let second = 0
    let miunte = 0
    let hour = 0
    const arrayTime = []
    const strTime = time.toString()
    const lengthTime = strTime.length  

    for (let i = 3; i <= lengthTime+3; i+=3) {
        if(i >=lengthTime ){
            arrayTime.push(strTime.substr(-i,lengthTime+3 - i))
            break
        }
        arrayTime.push(strTime.substr(-i,3))
    }
    if(arrayTime.length){
        arrayTime.forEach((itemTime,index)=>{
            
                if(index == 0){
                    lastMiliToSecond = Math.round( itemTime/10)
                }
                if(index == 1){
                    second = itemTime % 60
                    miunte =  Math.floor(itemTime / 60)
                }
                if(index == 2){
                    miunte += itemTime%60
                    hour = Math.floor(itemTime / 60)
                    if (hour  >0 ) miunte = 59 
                }
        })
    }
    result = `[${miunte<10?'0'+miunte:miunte}:${second<10?'0'+second:second}.${lastMiliToSecond}]`
    return result 
}
exports.formatTimeLrc= formatTimeLrc