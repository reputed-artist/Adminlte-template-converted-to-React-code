import React from 'react'

function Flot() {
  return (

    <>
    <section className="content">
      <div className="row">
        <div className="col-xs-12">
          
          <div className="box box-primary">
            <div className="box-header with-border">
              <i className="fa fa-bar-chart-o"></i>

              <h3 className="box-title">Interactive Area Chart</h3>

              <div className="box-tools pull-right">
                Real time
                <div className="btn-group" id="realtime" data-toggle="btn-toggle">
                  <button type="button" className="btn btn-default btn-xs active" data-toggle="on">On</button>
                  <button type="button" className="btn btn-default btn-xs" data-toggle="off">Off</button>
                </div>
              </div>
            </div>
            <div className="box-body">
              <div id="interactive" style={{height: "300px;"}}></div>
            </div>
            
          </div>
          

        </div>
        
      </div>
    

      <div className="row">
        <div className="col-md-6">
          
          <div className="box box-primary">
            <div className="box-header with-border">
              <i className="fa fa-bar-chart-o"></i>

              <h3 className="box-title">Line Chart</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              <div id="line-chart" style={{height: "300px;"}}></div>
            </div>
            
          </div>
          
          <div className="box box-primary">
            <div className="box-header with-border">
              <i className="fa fa-bar-chart-o"></i>

              <h3 className="box-title">Full Width Area Chart</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              <div id="area-chart" style={{height: "338px;"}} className="full-width-chart"></div>
            </div>
        
          </div>
        

        </div>
        

        <div className="col-md-6">
          
          <div className="box box-primary">
            <div className="box-header with-border">
              <i className="fa fa-bar-chart-o"></i>

              <h3 className="box-title">Bar Chart</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              <div id="bar-chart" style={{height: "300px;"}}></div>
            </div>
            
          </div>
          
          <div className="box box-primary">
            <div className="box-header with-border">
              <i className="fa fa-bar-chart-o"></i>

              <h3 className="box-title">Donut Chart</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              <div id="donut-chart" style={{height: "300px;"}}></div>
            </div>

          </div>
          
        </div>
        
      </div>
    
    </section>
    


    </>
  );
}
export default Flot;