import React from 'react'

function Inline() {
  return (
  <>
 <section className="content">     
      <div className="row">
        <div className="col-xs-12">
          
          <div className="box box-solid">
            <div className="box-header">
              <i className="fa fa-bar-chart-o"></i>

              <h3 className="box-title">jQuery Knob</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-default btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-default btn-sm" data-widget="remove"><i className="fa fa-times"></i>
                </button>
              </div>
            </div>
            
            <div className="box-body">
              <div className="row">
                <div className="col-xs-6 col-md-3 text-center">
                  <input type="text" className="knob" value="30" data-width="90" data-height="90" data-fgColor="#3c8dbc"/>

                  <div className="knob-label">New Visitors</div>
                </div>
                
                <div className="col-xs-6 col-md-3 text-center">
                  <input type="text" className="knob" value="70" data-width="90" data-height="90" data-fgColor="#f56954"/>

                  <div className="knob-label">Bounce Rate</div>
                </div>
        
                <div className="col-xs-6 col-md-3 text-center">
                  <input type="text" className="knob" value="-80" data-min="-150" data-max="150" data-width="90" data-height="90" data-fgColor="#00a65a"/>

                  <div className="knob-label">Server Load</div>
                </div>
                
                <div className="col-xs-6 col-md-3 text-center">
                  <input type="text" className="knob" value="40" data-width="90" data-height="90" data-fgColor="#00c0ef"/>

                  <div className="knob-label">Disk Space</div>
                </div>
                
              </div>
              

              <div className="row">
                <div className="col-xs-6 text-center">
                  <input type="text" className="knob" value="90" data-width="90" data-height="90" data-fgColor="#932ab6"/>

                  <div className="knob-label">Bandwidth</div>
                </div>
            
              <div className="col-xs-6 text-center">
                  <input type="text" className="knob" value="50" data-width="90" data-height="90" data-fgColor="#39CCCC"/>

                  <div className="knob-label">CPU</div>
                </div>
        
              </div>
              
            </div>
          
          </div>
          
        </div>
    
      </div>
      

      <div className="row">
        <div className="col-xs-12">
          <div className="box box-solid">
            <div className="box-header">
              <i className="fa fa-bar-chart-o"></i>

              <h3 className="box-title">jQuery Knob Different Sizes</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-default btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-default btn-sm" data-widget="remove"><i className="fa fa-times"></i>
                </button>
              </div>
            </div>
            
            <div className="box-body">
              <div className="row">
                <div className="col-xs-6 col-md-3 text-center">
                  <input type="text" className="knob" value="30" data-width="90" data-height="90" data-fgColor="#3c8dbc" data-readonly="true"/>

                  <div className="knob-label">data-width="90"</div>
                </div>
          
                <div className="col-xs-6 col-md-3 text-center">
                  <input type="text" className="knob" value="30" data-width="120" data-height="120" data-fgColor="#f56954"/>

                  <div className="knob-label">data-width="120"</div>
                </div>
                
                <div className="col-xs-6 col-md-3 text-center">
                  <input type="text" className="knob" value="30" data-thickness="0.1" data-width="90" data-height="90" data-fgColor="#00a65a"/>

                  <div className="knob-label">data-thickness="0.1"</div>
                </div>
                
                <div className="col-xs-6 col-md-3 text-center">
                  <input type="text" className="knob" data-thickness="0.2" data-angleArc="250" data-angleOffset="-125" value="30" data-width="120" data-height="120" data-fgColor="#00c0ef"/>

                  <div className="knob-label">data-angleArc="250"</div>
                </div>
                
              </div>
              
            </div>
        
          </div>
        
        </div>
        
      </div>
    

      <div className="row">
        <div className="col-xs-12">
          <div className="box box-solid">
            <div className="box-header">
              <i className="fa fa-bar-chart-o"></i>

              <h3 className="box-title">jQuery Knob Tron Style</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-default btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-default btn-sm" data-widget="remove"><i className="fa fa-times"></i>
                </button>
              </div>
            </div>
            
            <div className="box-body">
              <div className="row">
                <div className="col-xs-6 col-md-3 text-center">
                  <input type="text" className="knob" value="80" data-skin="tron" data-thickness="0.2" data-width="90" data-height="90" data-fgColor="#3c8dbc" data-readonly="true"/>

                  <div className="knob-label">data-width="90"</div>
                </div>
              
                <div className="col-xs-6 col-md-3 text-center">
                  <input type="text" className="knob" value="60" data-skin="tron" data-thickness="0.2" data-width="120" data-height="120" data-fgColor="#f56954"/>

                  <div className="knob-label">data-width="120"</div>
                </div>
                
                <div className="col-xs-6 col-md-3 text-center">
                  <input type="text" className="knob" value="10" data-skin="tron" data-thickness="0.1" data-width="90" data-height="90" data-fgColor="#00a65a"/>
                  <div className="knob-label">data-thickness="0.1"</div>
                </div>
                
                <div className="col-xs-6 col-md-3 text-center">
                  <input type="text" className="knob" value="100" data-skin="tron" data-thickness="0.2" data-angleArc="250" data-angleOffset="-125" data-width="120" data-height="120" data-fgColor="#00c0ef"/>

                  <div className="knob-label">data-angleArc="250"</div>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
      
      <div className="callout callout-info">
        <h4>The following was created using data tags</h4>

        <p>The following three inline (sparkline) chart have been initialized to read and interpret data tags</p>
      </div>
      

      <div className="row">
        <div className="col-md-4">
          <div className="box box-solid">
            <div className="box-header">
              <h3 className="box-title text-danger">Sparkline Pie</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh"></i></button>
              </div>
            </div>

            <div className="box-body text-center">
              <div className="sparkline" data-type="pie" data-offset="90" data-width="100px" data-height="100px">
                6,4,8
              </div>
            </div>
          
          </div>
          
        </div>
        

        <div className="col-md-4">
          <div className="box box-solid">
            <div className="box-header">
              <h3 className="box-title text-blue">Sparkline line</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh"></i></button>
              </div>
            </div>
            
            <div className="box-body text-center">
              <div className="sparkline" data-type="line" data-spot-Radius="3" data-highlight-Spot-Color="#f39c12" data-highlight-Line-Color="#222" data-min-Spot-Color="#f56954" data-max-Spot-Color="#00a65a" data-spot-Color="#39CCCC" data-offset="90" data-width="100%" data-height="100px" data-line-Width="2" data-line-Color="#39CCCC" data-fill-Color="rgba(57, 204, 204, 0.08)">
                6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6
              </div>
            </div>
            
          </div>
          
        </div>
        

        <div className="col-md-4">
          <div className="box box-solid">
            <div className="box-header">
              <h3 className="box-title text-warning">Sparkline Bar</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh"></i></button>
              </div>
            </div>
          
            <div className="box-body text-center">
              <div className="sparkline" data-type="bar" data-width="97%" data-height="100px" data-bar-Width="14" data-bar-Spacing="7" data-bar-Color="#f39c12">
                6,4,8, 9, 10, 5, 13, 18, 21, 7, 9
              </div>
            </div>
            
          </div>
      
        </div>
        
      </div>
      

      <div className="row">
        <div className="col-xs-12">
          <div className="box box-solid">
            <div className="box-header">
              <h3 className="box-title">Sparkline examples</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-default btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-default btn-sm" data-widget="remove"><i className="fa fa-times"></i>
                </button>
              </div>
            </div>
            
            <div id="myBody" className="box-body">
              <div className="row">
                <div className="col-sm-6">
                  <p>
                    Mouse speed <span id="mousespeed">Loading..</span>
                  </p>

                  <p>
                    Inline <span className="sparkline-1">10,8,9,3,5,8,5</span>
                    line graphs
                    <span className="sparkline-1">8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10</span>
                  </p>

                  <p>
                    Bar charts <span className="sparkbar">10,8,9,3,5,8,5</span>
                    negative values: <span className="sparkbar">-3,1,2,0,3,-1</span>
                    stacked: <span className="sparkbar">0:2,2:4,4:2,4:1</span>
                  </p>

                  <p>
                    Composite inline
                    <span id="compositeline">8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10</span>
                  </p>

                  <p>
                    Inline with normal range
                    <span id="normalline">8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10</span>
                  </p>

                  <p>
                    Composite bar
                    <span id="compositebar">4,6,7,7,4,3,2,1,4</span>
                  </p>

                  <p>
                    Discrete
                    <span className="discrete1">4,6,7,7,4,3,2,1,4,4,5,6,7,6,6,2,4,5</span><br />

                    Discrete with threshold
                    <span id="discrete2">4,6,7,7,4,3,2,1,4</span>
                  </p>

                  <p>
                    Bullet charts<br />
                    <span className="sparkbullet">10,12,12,9,7</span><br />
                    <span className="sparkbullet">14,12,12,9,7</span><br />
                    <span className="sparkbullet">10,12,14,9,7</span><br />
                  </p>
                </div>
            
                <div className="col-sm-6">
                  <p>
                    Customize size and colours
                    <span id="linecustom">10,8,9,3,5,8,5,7</span>
                  </p>

                  <p>
                    Tristate charts
                    <span className="sparktristate">1,1,0,1,-1,-1,1,-1,0,0,1,1</span><br />
                    (think games won, lost or drawn)
                  </p>

                  <p>
                    Tristate chart using a colour map:
                    <span className="sparktristatecols">1,2,0,2,-1,-2,1,-2,0,0,1,1</span>
                  </p>

                  <p>
                    Box Plot: <span className="sparkboxplot">4,27,34,52,54,59,61,68,78,82,85,87,91,93,100</span><br />
                    Pre-computed box plot <span className="sparkboxplotraw">Loading..</span>
                  </p>

                  <p>
                    Pie charts
                    <span className="sparkpie">1,1,2</span>
                    <span className="sparkpie">1,5</span>
                    <span className="sparkpie">20,50,80</span>
                  </p>
                </div>
              
              </div>
              
            </div>
            
          </div>
      
        </div>
    
      </div>
      
    </section>

    </>
  );
}
export default Inline;