import React from 'react'

import { Helmet } from 'react-helmet'

import './inicio-sesin.css'

const InicioSesin = (props) => {
  return (
    <div className="inicio-sesin-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="inicio-sesin-inicio-sesin">
        <img
          alt="image32023"
          src="/playground_assets/image32023-uokh-1500w.png"
          className="inicio-sesin-image3"
        />
        <img
          alt="Rectangle132023"
          src="/playground_assets/rectangle132023-tln-1500w.png"
          className="inicio-sesin-rectangle13"
        />
        <div className="inicio-sesin-group61">
          <button className="inicio-sesin-buttonbutton">
            <div className="inicio-sesin-statelayer">
              <span className="inicio-sesin-text materialThemelabellarge">
                <span>Iniciar Sesión</span>
              </span>
            </div>
          </button>
          <div className="inicio-sesin-textfieldinput">
            <div className="inicio-sesin-textfield">
              <div className="inicio-sesin-statelayer1">
                <div className="inicio-sesin-content">
                  <div className="inicio-sesin-labeltext">
                    <span className="inicio-sesin-text02 M3bodylarge">
                      <span>Usuario</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img
              alt="ActiveindicatorI178"
              src="/playground_assets/activeindicatori178-cpbf.svg"
              className="inicio-sesin-activeindicator"
            />
          </div>
          <div className="inicio-sesin-textfieldinput1">
            <div className="inicio-sesin-textfield1">
              <div className="inicio-sesin-statelayer2">
                <div className="inicio-sesin-content1">
                  <div className="inicio-sesin-labeltext1">
                    <span className="inicio-sesin-text04 M3bodylarge">
                      <span>Contraseña</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img
              alt="ActiveindicatorI178"
              src="/playground_assets/activeindicatori178-3y44.svg"
              className="inicio-sesin-activeindicator1"
            />
          </div>
          <span className="inicio-sesin-text06 materialThemebodysmall">
            <span>Ingresa tu usuario y contraseña para continuar</span>
          </span>
          <span className="inicio-sesin-text08 materialThemelabelsmall">
            <span>Olvidé mi contraseña</span>
          </span>
          <span className="inicio-sesin-text10">
            <span>Bienvenido/a!</span>
          </span>
          <img
            alt="Frame32181"
            src="/playground_assets/frame32181-vkrn.svg"
            className="inicio-sesin-frame3"
          />
        </div>
      </div>
    </div>
  )
}

export default InicioSesin
