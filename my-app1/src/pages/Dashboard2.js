import React from 'react'

function Dashboard2() {
  return (

    <>
    
    <section className="content">
      
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">CPU Traffic</span>
              <span className="info-box-number">90<small>%</small></span>
            </div>
        
          </div>

        </div>
    
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon bg-red"><i className="fa fa-google-plus"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">41,410</span>
            </div>
            
          </div>
          
        </div>
        
        <div className="clearfix visible-sm-block"></div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon bg-green"><i className="ion ion-ios-cart-outline"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Sales</span>
              <span className="info-box-number">760</span>
            </div>
          </div>
          
        </div>
        
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">New Members</span>
              <span className="info-box-number">2,000</span>
            </div>
            
          </div>
        
        </div>
      </div>
      

      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Monthly Recap Report</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <div className="btn-group">
                  <button type="button" className="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-wrench"></i></button>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>

            <div className="box-body">
              <div className="row">
                <div className="col-md-8">
                  <p className="text-center">
                    <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                  </p>

                  <div className="chart">
        
                    <canvas id="salesChart" style={{height: "180px"}}></canvas>
                  </div>
                  
                </div>
        
                <div className="col-md-4">
                  <p className="text-center">
                    <strong>Goal Completion</strong>
                  </p>

                  <div className="progress-group">
                    <span className="progress-text">Add Products to Cart</span>
                    <span className="progress-number"><b>160</b>/200</span>

                    <div className="progress sm">
                      <div className="progress-bar progress-bar-aqua" style={{width: "80%"}}></div>
                    </div>
                  </div>
                  
                  <div className="progress-group">
                    <span className="progress-text">Complete Purchase</span>
                    <span className="progress-number"><b>310</b>/400</span>

                    <div className="progress sm">
                      <div className="progress-bar progress-bar-red" style={{width: "80%"}}></div>
                    </div>
                  </div>
                  <div className="progress-group">
                    <span className="progress-text">Visit Premium Page</span>
                    <span className="progress-number"><b>480</b>/800</span>

                    <div className="progress sm">
                      <div className="progress-bar progress-bar-green" style={{width: "80%"}}></div>
                    </div>
                  </div>
                  
                  <div className="progress-group">
                    <span className="progress-text">Send Inquiries</span>
                    <span className="progress-number"><b>250</b>/500</span>

                    <div className="progress sm">
                      <div className="progress-bar progress-bar-yellow" style={{width: "80%"}}></div>
                    </div>
                  </div>
                
                </div>
              </div>
    
            </div>
    
            <div className="box-footer">
              <div className="row">
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                    <h5 className="description-header">$35,210.43</h5>
                    <span className="description-text">TOTAL REVENUE</span>
                  </div>
                  
                </div>

                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-yellow"><i className="fa fa-caret-left"></i> 0%</span>
                    <h5 className="description-header">$10,390.90</h5>
                    <span className="description-text">TOTAL COST</span>
                  </div>
            
                </div>

                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 20%</span>
                    <h5 className="description-header">$24,813.53</h5>
                    <span className="description-text">TOTAL PROFIT</span>
                  </div>
                
                </div>
            
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block">
                    <span className="description-percentage text-red"><i className="fa fa-caret-down"></i> 18%</span>
                    <h5 className="description-header">1200</h5>
                    <span className="description-text">GOAL COMPLETIONS</span>
                  </div>
                
                </div>
              </div>

            </div>
            
          </div>
          
        </div>
        
      </div>
    
      <div className="row">
    
        <div className="col-md-8">
          
          <div className="box box-success">
            <div className="box-header with-border">
              <h3 className="box-title">Visitors Report</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            
            <div className="box-body no-padding">
              <div className="row">
                <div className="col-md-9 col-sm-8">
                  <div className="pad">
                
                    <div id="world-map-markers" style={{height: "325px"}}></div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="pad box-pane-right bg-green" style={{minHeight: "280px"}}>
                    <div className="description-block margin-bottom">
                      <div className="sparkbar pad" data-color="#fff">90,70,90,70,75,80,70</div>
                      <h5 className="description-header">8390</h5>
                      <span className="description-text">Visits</span>
                    </div>
                    
                    <div className="description-block margin-bottom">
                      <div className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                      <h5 className="description-header">30%</h5>
                      <span className="description-text">Referrals</span>
                    </div>
                
                    <div className="description-block">
                      <div className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                      <h5 className="description-header">70%</h5>
                      <span className="description-text">Organic</span>
                    </div>
        
                  </div>
                </div>
        
              </div>
        
            </div>
    
          </div>
        
          <div className="row">
            <div className="col-md-6">
            
              <div className="box box-warning direct-chat direct-chat-warning">
                <div className="box-header with-border">
                  <h3 className="box-title">Direct Chat</h3>

                  <div className="box-tools pull-right">
                    <span data-toggle="tooltip" title="3 New Messages" className="badge bg-yellow">3</span>
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Contacts"
                            data-widget="chat-pane-toggle">
                      <i className="fa fa-comments"></i></button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i>
                    </button>
                  </div>
                </div>
    
                <div className="box-body">
                  
                  <div className="direct-chat-messages">
                
                    <div className="direct-chat-msg">
                      <div className="direct-chat-info clearfix">
                        <span className="direct-chat-name pull-left">Alexander Pierce</span>
                        <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                      </div>
    
                      <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image"/>
                    
                      <div className="direct-chat-text">
                        Is this template really for free? That's unbelievable!
                      </div>
                    
                    </div>
                    
                    <div className="direct-chat-msg right">
                      <div className="direct-chat-info clearfix">
                        <span className="direct-chat-name pull-right">Sarah Bullock</span>
                        <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                      </div>
        
                      <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image"/>
                      
                      <div className="direct-chat-text">
                        You better believe it!
                      </div>
        
                    </div>
                    
                    <div className="direct-chat-msg">
                      <div className="direct-chat-info clearfix">
                        <span className="direct-chat-name pull-left">Alexander Pierce</span>
                        <span className="direct-chat-timestamp pull-right">23 Jan 5:37 pm</span>
                      </div>
                      
                      <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image"/>
                    
                      <div className="direct-chat-text">
                        Working with AdminLTE on a great new app! Wanna join?
                      </div>
                      
                    </div>
                    
                    <div className="direct-chat-msg right">
                      <div className="direct-chat-info clearfix">
                        <span className="direct-chat-name pull-right">Sarah Bullock</span>
                        <span className="direct-chat-timestamp pull-left">23 Jan 6:10 pm</span>
                      </div>
                      
                      <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image"/>
                    
                      <div className="direct-chat-text">
                        I would love to.
                      </div>
                      
                    </div>
                    

                  </div>

                  <div className="direct-chat-contacts">
                    <ul className="contacts-list">
                      <li>
                        <a href="#">
                          <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" alt="User Image" />

                          <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Count Dracula
                                  <small className="contacts-list-date pull-right">2/28/2015</small>
                                </span>
                            <span className="contacts-list-msg">How have you been? I was...</span>
                          </div>
                    
                        </a>
                      </li>
            
                      <li>
                        <a href="#">
                          <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" alt="User Image"/>

                          <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Sarah Doe
                                  <small className="contacts-list-date pull-right">2/23/2015</small>
                                </span>
                            <span className="contacts-list-msg">I will be waiting for...</span>
                          </div>
                    
                        </a>
                      </li>
        
                      <li>
                        <a href="#">
                          <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" alt="User Image"/>

                          <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Nadia Jolie
                                  <small className="contacts-list-date pull-right">2/20/2015</small>
                                </span>
                            <span className="contacts-list-msg">I'll call you back at...</span>
                          </div>
                        
                        </a>
                      </li>
                
                      <li>
                        <a href="#">
                          <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" alt="User Image"/>

                          <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Nora S. Vans
                                  <small className="contacts-list-date pull-right">2/10/2015</small>
                                </span>
                            <span className="contacts-list-msg">Where is your new...</span>
                          </div>
                        
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" alt="User Image"/>

                          <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  John K.
                                  <small className="contacts-list-date pull-right">1/27/2015</small>
                                </span>
                            <span className="contacts-list-msg">Can I take a look at...</span>
                          </div>
                          
                        </a>
                      </li>
                    
                      <li>
                        <a href="#">
                          <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" alt="User Image"/>

                          <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Kenneth M.
                                  <small className="contacts-list-date pull-right">1/4/2015</small>
                                </span>
                            <span className="contacts-list-msg">Never mind I found...</span>
                          </div>
                
                        </a>
                      </li>

                    </ul>
    
                  </div>
                  
                </div>
                <div className="box-footer">
                  <form action="#" method="post">
                    <div className="input-group">
                      <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                      <span className="input-group-btn">
                            <button type="button" className="btn btn-warning btn-flat">Send</button>
                          </span>
                    </div>
                  </form>
                </div>
        
              </div>
        
            </div>
            
            <div className="col-md-6">
    
              <div className="box box-danger">
                <div className="box-header with-border">
                  <h3 className="box-title">Latest Members</h3>

                  <div className="box-tools pull-right">
                    <span className="label label-danger">8 New Members</span>
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i>
                    </button>
                  </div>
                </div>
        
                <div className="box-body no-padding">
                  <ul className="users-list clearfix">
                    <li>
                      <img src="dist/img/user1-128x128.jpg" alt="User Image"/>
                      <a className="users-list-name" href="#">Alexander Pierce</a>
                      <span className="users-list-date">Today</span>
                    </li>
                    <li>
                      <img src="dist/img/user8-128x128.jpg" alt="User Image"/>
                      <a className="users-list-name" href="#">Norman</a>
                      <span className="users-list-date">Yesterday</span>
                    </li>
                    <li>
                      <img src="dist/img/user7-128x128.jpg" alt="User Image"/>
                      <a className="users-list-name" href="#">Jane</a>
                      <span className="users-list-date">12 Jan</span>
                    </li>
                    <li>
                      <img src="dist/img/user6-128x128.jpg" alt="User Image"/>
                      <a className="users-list-name" href="#">John</a>
                      <span className="users-list-date">12 Jan</span>
                    </li>
                    <li>
                      <img src="dist/img/user2-160x160.jpg" alt="User Image"/>
                      <a className="users-list-name" href="#">Alexander</a>
                      <span className="users-list-date">13 Jan</span>
                    </li>
                    <li>
                      <img src="dist/img/user5-128x128.jpg" alt="User Image"/>
                      <a className="users-list-name" href="#">Sarah</a>
                      <span className="users-list-date">14 Jan</span>
                    </li>
                    <li>
                      <img src="dist/img/user4-128x128.jpg" alt="User Image"/>
                      <a className="users-list-name" href="#">Nora</a>
                      <span className="users-list-date">15 Jan</span>
                    </li>
                    <li>
                      <img src="dist/img/user3-128x128.jpg" alt="User Image"/>
                      <a className="users-list-name" href="#">Nadia</a>
                      <span className="users-list-date">15 Jan</span>
                    </li>
                  </ul>
                
                </div>
                
                <div className="box-footer text-center">
                  <a href="javascript:void(0)" className="uppercase">View All Users</a>
                </div>
                
              </div>
            
            </div>
            
          </div>
    
          <div className="box box-info">
            <div className="box-header with-border">
              <h3 className="box-title">Latest Orders</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
        
            <div className="box-body">
              <div className="table-responsive">
                <table className="table no-margin">
                  <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Item</th>
                    <th>Status</th>
                    <th>Popularity</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR9842</a></td>
                    <td>Call of Duty IV</td>
                    <td><span className="label label-success">Shipped</span></td>
                    <td>
                      <div className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR1848</a></td>
                    <td>Samsung Smart TV</td>
                    <td><span className="label label-warning">Pending</span></td>
                    <td>
                      <div className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR7429</a></td>
                    <td>iPhone 6 Plus</td>
                    <td><span className="label label-danger">Delivered</span></td>
                    <td>
                      <div className="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR7429</a></td>
                    <td>Samsung Smart TV</td>
                    <td><span className="label label-info">Processing</span></td>
                    <td>
                      <div className="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR1848</a></td>
                    <td>Samsung Smart TV</td>
                    <td><span className="label label-warning">Pending</span></td>
                    <td>
                      <div className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR7429</a></td>
                    <td>iPhone 6 Plus</td>
                    <td><span className="label label-danger">Delivered</span></td>
                    <td>
                      <div className="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR9842</a></td>
                    <td>Call of Duty IV</td>
                    <td><span className="label label-success">Shipped</span></td>
                    <td>
                      <div className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            
            </div>
            
            <div className="box-footer clearfix">
              <a href="javascript:void(0)" className="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>
              <a href="javascript:void(0)" className="btn btn-sm btn-default btn-flat pull-right">View All Orders</a>
            </div>
            
          </div>
        </div>
        

        <div className="col-md-4">
          
          <div className="info-box bg-yellow">
            <span className="info-box-icon"><i className="ion ion-ios-pricetag-outline"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Inventory</span>
              <span className="info-box-number">5,200</span>

              <div className="progress">
                <div className="progress-bar" style={{width: "50%"}}></div>
              </div>
              <span className="progress-description">
                    50% Increase in 30 Days
                  </span>
            </div>
        
          </div>
        
          <div className="info-box bg-green">
            <span className="info-box-icon"><i className="ion ion-ios-heart-outline"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Mentions</span>
              <span className="info-box-number">92,050</span>

              <div className="progress">
                <div className="progress-bar" style={{width: "20%"}}></div>
              </div>
              <span className="progress-description">
                    20% Increase in 30 Days
                  </span>
            </div>

          </div>
        
          <div className="info-box bg-red">
            <span className="info-box-icon"><i className="ion ion-ios-cloud-download-outline"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Downloads</span>
              <span className="info-box-number">114,381</span>

              <div className="progress">
                <div className="progress-bar" style={{width: "70%"}}></div>
              </div>
              <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
            </div>
            
          </div>
          
          <div className="info-box bg-aqua">
            <span className="info-box-icon"><i className="ion-ios-chatbubble-outline"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Direct Messages</span>
              <span className="info-box-number">163,921</span>

              <div className="progress">
                <div className="progress-bar" style={{width: "40%"}}></div>
              </div>
              <span className="progress-description">
                    40% Increase in 30 Days
                  </span>
            </div>
        
          </div>
          

          <div className="box box-default">
            <div className="box-header with-border">
              <h3 className="box-title">Browser Usage</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
        
            <div className="box-body">
              <div className="row">
                <div className="col-md-8">
                  <div className="chart-responsive">
                    <canvas id="pieChart" height="150"></canvas>
                  </div>
                
                </div>
        
                <div className="col-md-4">
                  <ul className="chart-legend clearfix">
                    <li><i className="fa fa-circle-o text-red"></i> Chrome</li>
                    <li><i className="fa fa-circle-o text-green"></i> IE</li>
                    <li><i className="fa fa-circle-o text-yellow"></i> FireFox</li>
                    <li><i className="fa fa-circle-o text-aqua"></i> Safari</li>
                    <li><i className="fa fa-circle-o text-light-blue"></i> Opera</li>
                    <li><i className="fa fa-circle-o text-gray"></i> Navigator</li>
                  </ul>
                </div>
        
              </div>
    
            </div>
        
            <div className="box-footer no-padding">
              <ul className="nav nav-pills nav-stacked">
                <li><a href="#">United States of America
                  <span className="pull-right text-red"><i className="fa fa-angle-down"></i> 12%</span></a></li>
                <li><a href="#">India <span className="pull-right text-green"><i className="fa fa-angle-up"></i> 4%</span></a>
                </li>
                <li><a href="#">China
                  <span className="pull-right text-yellow"><i className="fa fa-angle-left"></i> 0%</span></a></li>
              </ul>
            </div>
        
          </div>
          
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Recently Added Products</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
        
            <div className="box-body">
              <ul className="products-list product-list-in-box">
                <li className="item">
                  <div className="product-img">
                    <img src="/dist/img/default-50x50.gif" alt="Product Image"/>
                  </div>
                  <div className="product-info">
                    <a href="javascript:void(0)" className="product-title">Samsung TV
                      <span className="label label-warning pull-right">$1800</span></a>
                    <span className="product-description">
                          Samsung 32" 1080p 60Hz LED Smart HDTV.
                        </span>
                  </div>
                </li>
                
                <li className="item">
                  <div className="product-img">
                    <img src="/dist/img/default-50x50.gif" alt="Product Image"/>
                  </div>
                  <div className="product-info">
                    <a href="javascript:void(0)" className="product-title">Bicycle
                      <span className="label label-info pull-right">$700</span></a>
                    <span className="product-description">
                          26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                        </span>
                  </div>
                </li>
                
                <li className="item">
                  <div className="product-img">
                    <img src="/dist/img/default-50x50.gif" alt="Product Image"/>
                  </div>
                  <div className="product-info">
                    <a href="javascript:void(0)" className="product-title">Xbox One <span
                        className="label label-danger pull-right">$350</span></a>
                    <span className="product-description">
                          Xbox One Console Bundle with Halo Master Chief Collection.
                        </span>
                  </div>
                </li>
            
                <li className="item">
                  <div className="product-img">
                    <img src="/dist/img/default-50x50.gif" alt="Product Image"/>
                  </div>
                  <div className="product-info">
                    <a href="javascript:void(0)" className="product-title">PlayStation 4
                      <span className="label label-success pull-right">$399</span></a>
                    <span className="product-description">
                          PlayStation 4 500GB Console (PS4)
                        </span>
                  </div>
                </li>
        
              </ul>
            </div>
    
            <div className="box-footer text-center">
              <a href="javascript:void(0)" className="uppercase">View All Products</a>
            </div>
    
          </div>
    
        </div>
        
      </div>
    </section>
    
    </>
  );
}
export default Dashboard2;