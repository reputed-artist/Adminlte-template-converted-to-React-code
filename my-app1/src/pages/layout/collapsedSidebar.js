import React from 'react'

function CollapsedSidebar() {
  return (

    <>
      
    <section className="content">
      <div className="callout callout-info">
        <h4>Tip!</h4>

        <p>Add the sidebar-collapse class to the body tag to get this layout. You should combine this option with a
          fixed layout if you have a long sidebar. Doing that will prevent your page content from getting stretched
          vertically.</p>
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
export default CollapsedSidebar;