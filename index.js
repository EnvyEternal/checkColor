class color{
    
    constructor(value){
        for(let i = 0;i<3;i++){
            if(value[i]<0 || value[i]>255){
                throw new RangeError('its not a color')
            }
            if(isNaN(value[i])){
                throw new Error('wrong color format')
            }
        }
        if(value[3]<0 || value[3]>1){throw new Error('wrong apacity');}
        if(!Array.isArray(value)){throw new Error('incorrect data format')}
        this.value = value
        console.log(`rgba: ${value}`)
    }
  
}

const color1 = new color([255,255,255,0])
  

 