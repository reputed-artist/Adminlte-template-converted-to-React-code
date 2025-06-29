import React from 'react'

function Fixed() {
  return (

    <>
    
    <section className="content">
      <div className="callout callout-info">
        <h4>Tip!</h4>

        <p>Add the fixed class to the body tag to get this layout. The fixed layout is your best option if your sidebar
          is bigger than your content because it prevents extra unwanted scrolling.</p>
      </div>
    
      <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">Title</h3>

          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
              <i className="fa fa-minus"></i></button>
            <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i className="fa fa-times"></i></button>
          </div>
        </div>
        <div className="box-body">
          Start creating your amazing application!
        </div>
        
        <div className="box-footer">
          Footer
        </div>
        
      </div>

    </section>
   

    </>
  );
}
export default Fixed;