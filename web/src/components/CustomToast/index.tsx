import React, {useState} from 'react';
import {Toast, Fade} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import './styles.css';

interface Props{
   showToast: boolean;
   setShowToast: (state: boolean) => void;
}

const CustomToast:React.FC<Props> = ({showToast, setShowToast}) => {
    const history = useHistory();
    return(
        <Toast
          className="toast" 
          onClose={() => {
            setShowToast(false)
            history.push('/');
          }} 
          show={showToast}
          delay={2500}
          autohide 
         >
          <Toast.Header closeButton={false}>
              <b className="toast-header-sucess">Sucesso</b>
          </Toast.Header>
          
          <Toast.Body style={{marginTop:10}}>
            Ponto cadastrado com sucesso!
          </Toast.Body>
        </Toast>

    );
}

export default CustomToast;