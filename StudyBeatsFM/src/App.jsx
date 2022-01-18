import './index.css'
import BackgroundVideo from './components/backgroundVideo'
import RadioList from './components/radioList'
import AudioControl from './components/audioControls'
import PomodoroTimer from './components/pomodoroTimer'
import AdditionSettings from './components/additionalInfo'


function App() {
  

  return (
    
  
    <div className='interfaceContainer'>
         
          <RadioList/>
          <PomodoroTimer/>
          <AudioControl/>
            <AdditionSettings/>
          
           <BackgroundVideo/>
            

        
    </div>



    
      

    
   
  )
}

export default App

 