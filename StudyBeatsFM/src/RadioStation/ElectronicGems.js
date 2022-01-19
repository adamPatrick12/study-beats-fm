import synth from '../Music/Synthwave.mp3'
import home from '../Music/HOME - Resonance.mp3'
import SweetLook from '../Music/SweetLook.mp3'


export const ElectronicGemsRadio = (statio) =>{
    if(statio === 'retro'){
        return [new Audio(home),
            new Audio(synth)]
    }else if (statio === 'Lofi'){
        return [new Audio(SweetLook)]
    }
}

export default ElectronicGemsRadio;

