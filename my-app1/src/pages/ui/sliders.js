// import React from 'react';
// import { useEffect } from 'react';
// //import '/plugins/bootstrap-slider/slider.css'; // this works if file is inside "public/plugins/..."


// function Sliders() {
    

//   return (

//     <>
    
//     <section className="content">
//       <div className="row">
//         <div className="col-xs-12">
//           <div className="box box-primary">
//             <div className="box-header">
//               <h3 className="box-title">Bootstrap Slider</h3>
//             </div>
            
//             <div className="box-body">
//               <div className="row margin">
//                 <div className="col-sm-6">
//                   <input type="text" defaultValue="" className="slider form-control" data-slider-min="-200" data-slider-max="200"
//                          data-slider-step="5" data-slider-value="[-100,100]" data-slider-orientation="horizontal"
//                          data-slider-selection="before" data-slider-tooltip="show" data-slider-id="red"/>

//                   <p>data-slider-id="red"</p>
//                   <input type="text" defaultValue="" className="slider form-control" data-slider-min="-200" data-slider-max="200"
//                          data-slider-step="5" data-slider-value="[-100,100]" data-slider-orientation="horizontal"
//                          data-slider-selection="before" data-slider-tooltip="show" data-slider-id="blue"/>

//                   <p>data-slider-id="blue"</p>
//                   <input type="text" value="" className="slider form-control" data-slider-min="-200" data-slider-max="200"
//                          data-slider-step="5" data-slider-value="[-100,100]" data-slider-orientation="horizontal"
//                          data-slider-selection="before" data-slider-tooltip="show" data-slider-id="green"/>

//                   <p>data-slider-id="green"</p>
//                   <input type="text" defaultValue="" className="slider form-control" data-slider-min="-200" data-slider-max="200"
//                          data-slider-step="5" data-slider-value="[-100,100]" data-slider-orientation="horizontal"
//                          data-slider-selection="before" data-slider-tooltip="show" data-slider-id="yellow"/>

//                   <p>data-slider-id="yellow"</p>
//                   <input type="text" defaultValue="" className="slider form-control" data-slider-min="-200" data-slider-max="200"
//                          data-slider-step="5" data-slider-value="[-100,100]" data-slider-orientation="horizontal"
//                          data-slider-selection="before" data-slider-tooltip="show" data-slider-id="aqua"/>

//                   <p>data-slider-id="aqua"</p>
//                   <input type="text" defaultValue="" className="slider form-control" data-slider-min="-200" data-slider-max="200"
//                          data-slider-step="5" data-slider-value="[-100,100]" data-slider-orientation="horizontal"
//                          data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple"/>

//                   <p style={{marginTop: "10px"}}>data-slider-id="purple"</p>
//                 </div>
//                 <div className="col-sm-6 text-center">
//                   <input type="text" defaultValue="" className="slider form-control" data-slider-min="-200" data-slider-max="200"
//                          data-slider-step="5" data-slider-value="[-100,100]" data-slider-orientation="vertical"
//                          data-slider-selection="before" data-slider-tooltip="show" data-slider-id="red"/>
//                   <input type="text" defaultValue="" className="slider form-control" data-slider-min="-200" data-slider-max="200"
//                          data-slider-step="5" data-slider-value="[-100,100]" data-slider-orientation="vertical"
//                          data-slider-selection="before" data-slider-tooltip="show" data-slider-id="blue"/>
//                   <input type="text" defaultValue="" className="slider form-control" data-slider-min="-200" data-slider-max="200"
//                          data-slider-step="5" data-slider-value="[-100,100]" data-slider-orientation="vertical"
//                          data-slider-selection="before" data-slider-tooltip="show" data-slider-id="green"/>
//                   <input type="text" defaultValue="" className="slider form-control" data-slider-min="-200" data-slider-max="200"
//                          data-slider-step="5" data-slider-value="[-100,100]" data-slider-orientation="vertical"
//                          data-slider-selection="before" data-slider-tooltip="show" data-slider-id="yellow"/>
//                   <input type="text" defaultValue="" className="slider form-control" data-slider-min="-200" data-slider-max="200"
//                          data-slider-step="5" data-slider-value="[-100,100]" data-slider-orientation="vertical"
//                          data-slider-selection="before" data-slider-tooltip="show" data-slider-id="aqua"/>
//                   <input type="text" defaultValue="10"  className="slider form-control" data-slider-min="-200" data-slider-max="200"
//                          data-slider-step="5" data-slider-value="[-100,100]" data-slider-orientation="vertical"
//                          data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple"/>
//                 </div>
//               </div>
//             </div>
    
//           </div>
//         </div>
    
//       </div>
    
//     </section>
  
    
//     </>
//   );
// }
// export default Sliders;
import React, { useEffect } from 'react';

function Sliders() {
  useEffect(() => {
    const $ = window.$ || window.jQuery;

    const initializeSliders = () => {
      if ($ && $('.slider').slider) {
        $('.slider').slider();
      } else {
        console.warn('Slider plugin not loaded or jQuery missing');
      }
    };

    // Wait for DOM update after render
    requestAnimationFrame(() => {
      setTimeout(initializeSliders, 0);
    });
  }, []);

  const colors = ["red", "blue", "green", "yellow", "aqua", "purple"];

  return (
    <section className="content">
      <div className="row">
        <div className="col-xs-12">
          <div className="box box-primary">
            <div className="box-header">
              <h3 className="box-title">Bootstrap Slider</h3>
            </div>

            <div className="box-body">
              <div className="row margin">
                <div className="col-sm-6">
                  {colors.map((color) => (
                    <div key={color}>
                      <input
                        type="text"
                        defaultValue=""
                        className="slider form-control"
                        data-slider-min="-200"
                        data-slider-max="200"
                        data-slider-step="5"
                        data-slider-value="[-100,100]"
                        data-slider-orientation="horizontal"
                        data-slider-selection="before"
                        data-slider-tooltip="show"
                        data-slider-id={color}
                    
                      />
                      <p>data-slider-id="{color}"</p>
                    </div>
                  ))}
                </div>

                <div className="col-sm-6 text-center">
                  {colors.map((color) => (
                    <div key={`v-${color}`} style={{ marginBottom: '20px' }}>
                      <input
                        type="text"
                        defaultValue=""
                        className="slider form-control"
                        data-slider-min="-200"
                        data-slider-max="200"
                        data-slider-step="5"
                        data-slider-value="[-100,100]"
                        data-slider-orientation="vertical"
                        data-slider-selection="before"
                        data-slider-tooltip="show"
                        data-slider-id={color}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Sliders;
