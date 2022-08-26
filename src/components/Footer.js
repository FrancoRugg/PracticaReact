import React from 'react';
import Logo from '../assets/img/logo-DH.png';
function Footer(){
    return(
<>
    <footer  class="pie">
       <nav id="logo">
        <a href="#"><img src={Logo} alt="Logo Digital House"/></a>
       </nav>
      <nav id="opciones">
        <ul>
            <li><a href="#">facebook</a></li>
            <li><a href="#">Instagram</a></li>
        </ul>
     </nav>
    </footer>
</>
    )
}

export default Footer;