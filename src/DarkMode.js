import ImgLightmode from './media/lightmode.png'
import ImgDarkmode from './media/darkmode.png'

export function ButtonMode() {
    return <>
        <button className="switchButton darkModeButton" onClick={DarkMode}>
            <span className="switchSlider">
                <img src={document.body.classList.contains("darkMode") ? ImgDarkmode : ImgLightmode} alt="imgSlider"/>
            </span>
        </button>
    </>
}

function DarkMode() {
    document.body.classList.toggle("darkMode");
}

//para saber los colores por preferencia del equipo
if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {

    const systemColorPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    if (systemColorPreference === 'dark') {
      document.body.classList.add('darkMode');
      ButtonMode()
    } else {
      document.body.classList.remove('darkMode');
      ButtonMode()
    }
}