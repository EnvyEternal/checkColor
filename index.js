class color{
    
    constructor(value){
        for(let i = 0;i<4;i++){
            if(value[i]<0 || value[i]>255){
                throw new RangeError('its not a color')
            }
            if(isNaN(value[i])){
                throw new Error('wrong color format')
            }
        }
        if(!Array.isArray(value)){throw new Error('incorrect data format')}
        this.value = value
        console.log(`rgbo: ${value}`)
    }
  
}

const color1 = new color([255,255,255,0])


