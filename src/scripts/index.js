// MAIN STYLESHEET
import '../styles/styles.scss'

//##
import { getJoke } from './generateJoke'

import webpackLogo from '../assets/webpack-icon.svg'

webpackLogoIMG.src = webpackLogo

buttonJoke.addEventListener('click', getJoke)
getJoke()
