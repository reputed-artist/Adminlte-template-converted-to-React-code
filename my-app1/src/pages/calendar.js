import React from 'react'

function Calendar() {
  return (

    <>
    
    <section className="content">
      <div className="row">
        <div className="col-md-3">
          <div className="box box-solid">
            <div className="box-header with-border">
              <h4 className="box-title">Draggable Events</h4>
            </div>
            <div className="box-body">
            
              <div id="external-events">
                <div className="external-event bg-green">Lunch</div>
                <div className="external-event bg-yellow">Go home</div>
                <div className="external-event bg-aqua">Do homework</div>
                <div className="external-event bg-light-blue">Work on UI design</div>
                <div className="external-event bg-red">Sleep tight</div>
                <div className="checkbox">
                  <label for="drop-remove">
                    <input type="checkbox" id="drop-remove"/>
                    remove after drop
                  </label>
                </div>
              </div>
            </div>
          
          </div>
    
          <div className="box box-solid">
            <div className="box-header with-border">
              <h3 className="box-title">Create Event</h3>
            </div>
            <div className="box-body">
              <div className="btn-group" style={{width: "100%", marginBottom: "10px"}}>
                
                <ul className="fc-color-picker" id="color-chooser">
                  <li><a className="text-aqua" href="#"><i className="fa fa-square"></i></a></li>
                  <li><a className="text-blue" href="#"><i className="fa fa-square"></i></a></li>
                  <li><a className="text-light-blue" href="#"><i className="fa fa-square"></i></a></li>
                  <li><a className="text-teal" href="#"><i className="fa fa-square"></i></a></li>
                  <li><a className="text-yellow" href="#"><i className="fa fa-square"></i></a></li>
                  <li><a className="text-orange" href="#"><i className="fa fa-square"></i></a></li>
                  <li><a className="text-green" href="#"><i className="fa fa-square"></i></a></li>
                  <li><a className="text-lime" href="#"><i className="fa fa-square"></i></a></li>
                  <li><a className="text-red" href="#"><i className="fa fa-square"></i></a></li>
                  <li><a className="text-purple" href="#"><i className="fa fa-square"></i></a></li>
                  <li><a className="text-fuchsia" href="#"><i className="fa fa-square"></i></a></li>
                  <li><a className="text-muted" href="#"><i className="fa fa-square"></i></a></li>
                  <li><a className="text-navy" href="#"><i className="fa fa-square"></i></a></li>
                </ul>
              </div>
          
              <div className="input-group">
                <input id="new-event" type="text" className="form-control" placeholder="Event Title"/>

                <div className="input-group-btn">
                  <button id="add-new-event" type="button" className="btn btn-primary btn-flat">Add</button>
                </div>
            
              </div>
            
            </div>
          </div>
        </div>
  
        <div className="col-md-9">
          <div className="box box-primary">
            <div className="box-body no-padding">
              
              <div id="calendar"></div>
            </div>
            
          </div>
    
        </div>
        
      </div>
    
    </section>
  
    
    </>
  );
}
export default Calendar;