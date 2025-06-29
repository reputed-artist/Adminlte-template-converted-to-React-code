import React from 'react'

function Pace() {
  return (

    <>
    
  <section className="content">


      <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">Title</h3>

          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                    title="Collapse">
              <i className="fa fa-minus"></i></button>
            <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i className="fa fa-times"></i></button>
          </div>
        </div>
        <div className="box-body">
          Pace loading works automatically on page. You can still implement it with ajax requests by adding this js:
          <br/><code>$(document).ajaxStart(function() &#123; Pace.restart(); &#125;);</code>
          <br/>
          <div className="row">
            <div className="col-xs-12 text-center">
              <button type="button" className="btn btn-default btn-lrg ajax" title="Ajax Request">
                <i className="fa fa-spin fa-refresh"></i>&nbsp; Get External Content
              </button>
            </div>
          </div>
          <div className="ajax-content">
          </div>
        </div>
        
        <div className="box-footer">
          Footer
        </div>

      </div>
      

    </section>
  
  
    
    </>
  );
}
export default Pace;