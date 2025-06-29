import React from 'react'
import reactDom from 'react-dom';
import { useState } from 'react';

function Editors() {

    const [text, setText] = useState("Hello");

  return (

    <>
    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="box box-info">
            <div className="box-header">
              <h3 className="box-title">CK Editor
                <small>Advanced and full of features</small>
              </h3>
            
              <div className="pull-right box-tools">
                <button type="button" className="btn btn-info btn-sm" data-widget="collapse" data-toggle="tooltip"
                        title="Collapse">
                  <i className="fa fa-minus"></i></button>
                <button type="button" className="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip"
                        title="Remove">
                  <i className="fa fa-times"></i></button>
              </div>
              
            </div>
            
            <div className="box-body pad">
              <form>
                    <textarea id="editor1" name="editor1" rows="10" cols="80" defaultValue="This is my textarea to be replaced with CKEditor.">
                                            
                    </textarea>
              </form>
            </div>
          </div>
        

          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Bootstrap WYSIHTML5
                <small>Simple and fast</small>
              </h3>
              
              <div className="pull-right box-tools">
                <button type="button" className="btn btn-default btn-sm" data-widget="collapse" data-toggle="tooltip"
                        title="Collapse">
                  <i className="fa fa-minus"></i></button>
                <button type="button" className="btn btn-default btn-sm" data-widget="remove" data-toggle="tooltip"
                        title="Remove">
                  <i className="fa fa-times"></i></button>
              </div>
              
            </div>
            
            <div className="box-body pad">
              <form>
                <textarea className="textarea" placeholder="Place some text here"
                          style={{ width: "100%", height: "200px", fontSize: "14px", lineHeight: "18px", border: "1px solid #dddddd", padding: "10px"}}></textarea>
              </form>
            </div>
          </div>
        </div>
    
      </div>
      
    </section>
   
    
    </>
  );
}
export default Editors;