import React from 'react'

function Widget() {
  return (

    <>

    <section className="content">

      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon bg-aqua"><i class="fa fa-envelope-o"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Messages</span>
              <span className="info-box-number">1,410</span>
            </div>
            
          </div>
        
        </div>
    
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon bg-green"><i className="fa fa-flag-o"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Bookmarks</span>
              <span className="info-box-number">410</span>
            </div>
            
          </div>
          
        </div>
        
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon bg-yellow"><i className="fa fa-files-o"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Uploads</span>
              <span className="info-box-number">13,648</span>
            </div>
        
          </div>
    
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon bg-red"><i className="fa fa-star-o"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">93,139</span>
            </div>
            
          </div>
          
        </div>
    
      </div>
      

      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box bg-aqua">
            <span className="info-box-icon"><i className="fa fa-bookmark-o"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Bookmarks</span>
              <span className="info-box-number">41,410</span>

              <div className="progress">
                <div className="progress-bar" style={{width: "70%"}}></div>
              </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
            </div>
    
          </div>
          
        </div>
        
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box bg-green">
            <span className="info-box-icon"><i className="fa fa-thumbs-o-up"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">41,410</span>

              <div className="progress">
                <div className="progress-bar" style={{width: "70%"}}></div>
              </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
            </div>
            
          </div>
          
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box bg-yellow">
            <span className="info-box-icon"><i className="fa fa-calendar"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Events</span>
              <span className="info-box-number">41,410</span>

              <div className="progress">
                <div className="progress-bar" style={{width: "70%"}}></div>
              </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
            </div>
            
          </div>
          
        </div>
        
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box bg-red">
            <span className="info-box-icon"><i className="fa fa-comments-o"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Comments</span>
              <span className="info-box-number">41,410</span>

              <div className="progress">
                <div className="progress-bar" style={{width: "70%"}}></div>
              </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
            </div>
            
          </div>
          
        </div>
    
      </div>
      
      <div className="row">
        <div className="col-lg-3 col-xs-6">
          
          <div className="small-box bg-aqua">
            <div className="inner">
              <h3>150</h3>

              <p>New Orders</p>
            </div>
            <div className="icon">
              <i className="fa fa-shopping-cart"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        
        <div className="col-lg-3 col-xs-6">
          
          <div className="small-box bg-green">
            <div className="inner">
              <h3>53<sup style={{fontSize: "20px"}}>%</sup></h3>

              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        
        <div className="col-lg-3 col-xs-6">
    
          <div className="small-box bg-yellow">
            <div className="inner">
              <h3>44</h3>

              <p>User Registrations</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        
        <div className="col-lg-3 col-xs-6">
          
          <div className="small-box bg-red">
            <div className="inner">
              <h3>65</h3>

              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        
      </div>
    

      <div className="row">
        <div className="col-md-3">
          <div className="box box-default collapsed-box">
            <div className="box-header with-border">
              <h3 className="box-title">Expandable</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-plus"></i>
                </button>
              </div>
        
            </div>
        
            <div className="box-body">
              The body of the box
            </div>
    
          </div>
          
        </div>

        <div className="col-md-3">
          <div className="box box-success">
            <div className="box-header with-border">
              <h3 className="box-title">Removable</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
        
            </div>
            
            <div className="box-body">
              The body of the box
            </div>
          </div>
        
        </div>
        
        <div className="col-md-3">
          <div className="box box-warning">
            <div className="box-header with-border">
              <h3 className="box-title">Collapsable</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
              </div>
        
            </div>
    
            <div className="box-body">
              The body of the box
            </div>
        
          </div>
          
        </div>
        
        <div className="col-md-3">
          <div className="box box-danger">
            <div className="box-header">
              <h3 className="box-title">Loading state</h3>
            </div>
            <div className="box-body">
              The body of the box
            </div>
            
            <div className="overlay">
              <i className="fa fa-refresh fa-spin"></i>
            </div>
            
          </div>
        
        </div>
        
      </div>
      
      <div className="row">
        <div className="col-md-3">
          <div className="box box-default collapsed-box box-solid">
            <div className="box-header with-border">
              <h3 className="box-title">Expandable</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-plus"></i>
                </button>
              </div>
            
            </div>
            
            <div className="box-body">
              The body of the box
            </div>
        
          </div>

        </div>
        
        <div className="col-md-3">
          <div className="box box-success box-solid">
            <div className="box-header with-border">
              <h3 className="box-title">Removable</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>

            </div>
        
            <div className="box-body">
              The body of the box
            </div>
            
          </div>
          
        </div>
        
        <div className="col-md-3">
          <div className="box box-warning box-solid">
            <div className="box-header with-border">
              <h3 className="box-title">Collapsable</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
              </div>
            
            </div>
            
            <div className="box-body">
              The body of the box
            </div>
            
          </div>
        
        </div>
    
        <div className="col-md-3">
          <div className="box box-danger box-solid">
            <div className="box-header">
              <h3 className="box-title">Loading state</h3>
            </div>
            <div className="box-body">
              The body of the box
            </div>
            
            <div className="overlay">
              <i className="fa fa-refresh fa-spin"></i>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
      <div className="row">
        <div className="col-md-3">
        
          <div className="box box-primary direct-chat direct-chat-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Direct Chat</h3>

              <div className="box-tools pull-right">
                <span data-toggle="tooltip" title="3 New Messages" className="badge bg-light-blue">3</span>
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                  <i className="fa fa-comments"></i></button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            
            <div className="box-body">
              
              <div className="direct-chat-messages">
                
                <div className="direct-chat-msg">
                  <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name pull-left">Alexander Pierce</span>
                    <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                  </div>
                
                  <img className="direct-chat-img" src="../dist/img/user1-128x128.jpg" alt="Message User Image"/>
                  <div className="direct-chat-text">
                    Is this template really for free? That's unbelievable!
                  </div>
        
                </div>
                
                <div className="direct-chat-msg right">
                  <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name pull-right">Sarah Bullock</span>
                    <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                  </div>
                
                  <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="Message User Image"/>
                  <div className="direct-chat-text">
                    You better believe it!
                  </div>
                  
                </div>
                
              </div>
              
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="../dist/img/user1-128x128.jpg" alt="User Image"/>

                      <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Count Dracula
                              <small className="contacts-list-date pull-right">2/28/2015</small>
                            </span>
                        <span className="contacts-list-msg">How have you been? I was...</span>
                      </div>
                      
                    </a>
                  </li>
                </ul>
            
              </div>
              
            </div>
            
            <div className="box-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input type="text" name="message" placeholder="Type Message ..." className="form-control"/>
                      <span className="input-group-btn">
                        <button type="submit" className="btn btn-primary btn-flat">Send</button>
                      </span>
                </div>
              </form>
            </div>
        
          </div>
        
        </div>
        

        <div className="col-md-3">
        
          <div className="box box-success direct-chat direct-chat-success">
            <div className="box-header with-border">
              <h3 className="box-title">Direct Chat</h3>

              <div className="box-tools pull-right">
                <span data-toggle="tooltip" title="3 New Messages" className="badge bg-green">3</span>
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                  <i class="fa fa-comments"></i></button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            
            <div className="box-body">
            
              <div className="direct-chat-messages">
                
                <div className="direct-chat-msg">
                  <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name pull-left">Alexander Pierce</span>
                    <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                  </div>
                
                  <img className="direct-chat-img" src="../dist/img/user1-128x128.jpg" alt="Message User Image"/>
                  <div className="direct-chat-text">
                    Is this template really for free? That's unbelievable!
                  </div>
        
                </div>

                <div className="direct-chat-msg right">
                  <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name pull-right">Sarah Bullock</span>
                    <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                  </div>
            
                  <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="Message User Image"/>
                  <div className="direct-chat-text">
                    You better believe it!
                  </div>
                
                </div>
            
              </div>
            

              
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="../dist/img/user1-128x128.jpg" alt="User Image"/>

                      <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Count Dracula
                              <small className="contacts-list-date pull-right">2/28/2015</small>
                            </span>
                        <span className="contacts-list-msg">How have you been? I was...</span>
                      </div>
                
                    </a>
                  </li>
        
                </ul>
    
              </div>
            
            </div>

            <div className="box-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input type="text" name="message" placeholder="Type Message ..." className="form-control"/>
                      <span className="input-group-btn">
                        <button type="submit" className="btn btn-success btn-flat">Send</button>
                      </span>
                </div>
              </form>
            </div>
    
          </div>
    
        </div>
        

        <div className="col-md-3">
          
          <div className="box box-warning direct-chat direct-chat-warning">
            <div className="box-header with-border">
              <h3 className="box-title">Direct Chat</h3>

              <div className="box-tools pull-right">
                <span data-toggle="tooltip" title="3 New Messages" className="badge bg-yellow">3</span>
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                  <i className="fa fa-comments"></i></button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
        
            <div className="box-body">
              
              <div className="direct-chat-messages">
        
                <div className="direct-chat-msg">
                  <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name pull-left">Alexander Pierce</span>
                    <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                  </div>
                  
                  <img className="direct-chat-img" src="../dist/img/user1-128x128.jpg" alt="Message User Image"/>
                  <div className="direct-chat-text">
                    Is this template really for free? That's unbelievable!
                  </div>
                
                </div>
                
                <div className="direct-chat-msg right">
                  <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name pull-right">Sarah Bullock</span>
                    <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                  </div>
                
                  <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="Message User Image"/>
                  <div className="direct-chat-text">
                    You better believe it!
                  </div>
                  
                </div>
        
              </div>
            
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="../dist/img/user1-128x128.jpg" alt="User Image"/>

                      <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Count Dracula
                              <small className="contacts-list-date pull-right">2/28/2015</small>
                            </span>
                        <span className="contacts-list-msg">How have you been? I was...</span>
                      </div>

                    </a>
                  </li>
            
                </ul>
                
              </div>
        
            </div>
            
            <div className="box-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input type="text" name="message" placeholder="Type Message ..." className="form-control"/>
                      <span className="input-group-btn">
                        <button type="submit" className="btn btn-warning btn-flat">Send</button>
                      </span>
                </div>
              </form>
            </div>
        
          </div>
          
        </div>
        

        <div className="col-md-3">
        
          <div className="box box-danger direct-chat direct-chat-danger">
            <div className="box-header with-border">
              <h3 className="box-title">Direct Chat</h3>

              <div className="box-tools pull-right">
                <span data-toggle="tooltip" title="3 New Messages" className="badge bg-red">3</span>
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                  <i class="fa fa-comments"></i></button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>

            <div className="box-body">
            
              <div className="direct-chat-messages">
                
                <div className="direct-chat-msg">
                  <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name pull-left">Alexander Pierce</span>
                    <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                  </div>
                
                  <img className="direct-chat-img" src="../dist/img/user1-128x128.jpg" alt="Message User Image"/>
                  <div className="direct-chat-text">
                    Is this template really for free? That's unbelievable!
                  </div>
            
                </div>
                
                <div className="direct-chat-msg right">
                  <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name pull-right">Sarah Bullock</span>
                    <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                  </div>
                
                  <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="Message User Image"/>
                  <div className="direct-chat-text">
                    You better believe it!
                  </div>
    
                </div>
            
              </div>
              
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="../dist/img/user1-128x128.jpg" alt="User Image"/>

                      <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Count Dracula
                              <small className="contacts-list-date pull-right">2/28/2015</small>
                            </span>
                        <span className="contacts-list-msg">How have you been? I was...</span>
                      </div>
                      
                    </a>
                  </li>
                  
                </ul>
                
              </div>
        
            </div>
        
            <div className="box-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input type="text" name="message" placeholder="Type Message ..." className="form-control"/>
                      <span className="input-group-btn">
                        <button type="submit" class="btn btn-danger btn-flat">Send</button>
                      </span>
                </div>
              </form>
            </div>
        
          </div>
          
        </div>
    
      </div>
    

      <h2 className="page-header">Social Widgets</h2>

      <div className="row">
        <div className="col-md-4">
          
          <div className="box box-widget widget-user-2">
    
            <div className="widget-user-header bg-yellow">
              <div className="widget-user-image">
                <img className="img-circle" src="../dist/img/user7-128x128.jpg" alt="User Avatar"/>
              </div>
              
              <h3 className="widget-user-username">Nadia Carmichael</h3>
              <h5 className="widget-user-desc">Lead Developer</h5>
            </div>
            <div className="box-footer no-padding">
              <ul className="nav nav-stacked">
                <li><a href="#">Projects <span className="pull-right badge bg-blue">31</span></a></li>
                <li><a href="#">Tasks <span className="pull-right badge bg-aqua">5</span></a></li>
                <li><a href="#">Completed Projects <span className="pull-right badge bg-green">12</span></a></li>
                <li><a href="#">Followers <span className="pull-right badge bg-red">842</span></a></li>
              </ul>
            </div>
          </div>
        
        </div>
    
        <div className="col-md-4">
        
          <div className="box box-widget widget-user">
            
            <div className="widget-user-header bg-aqua-active">
              <h3 className="widget-user-username">Alexander Pierce</h3>
              <h5 className="widget-user-desc">Founder &amp; CEO</h5>
            </div>
            <div className="widget-user-image">
              <img className="img-circle" src="../dist/img/user1-128x128.jpg" alt="User Avatar"/>
            </div>
            <div className="box-footer">
              <div className="row">
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">3,200</h5>
                    <span className="description-text">SALES</span>
                  </div>
                
                </div>
        
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">13,000</h5>
                    <span className="description-text">FOLLOWERS</span>
                  </div>
                  
                </div>
            
                <div className="col-sm-4">
                  <div className="description-block">
                    <h5 className="description-header">35</h5>
                    <span className="description-text">PRODUCTS</span>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
          
        </div>
        
        <div className="col-md-4">
          
          <div className="box box-widget widget-user">
            
            <div className="widget-user-header bg-black" style={{background: "url('../dist/img/photo1.png') center center;"}}>
              <h3 className="widget-user-username">Elizabeth Pierce</h3>
              <h5 className="widget-user-desc">Web Designer</h5>
            </div>
            <div className="widget-user-image">
              <img className="img-circle" src="../dist/img/user3-128x128.jpg" alt="User Avatar"/>
            </div>
            <div className="box-footer">
              <div className="row">
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">3,200</h5>
                    <span className="description-text">SALES</span>
                  </div>
                
                </div>
        
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">13,000</h5>
                    <span className="description-text">FOLLOWERS</span>
                  </div>
            
                </div>
        
                <div className="col-sm-4">
                  <div className="description-block">
                    <h5 className="description-header">35</h5>
                    <span className="description-text">PRODUCTS</span>
                  </div>
                  
                </div>
                
              </div>
            
            </div>
          </div>
          
        </div>
        
      </div>


      <div className="row">
        <div className="col-md-6">
          
          <div className="box box-widget">
            <div className="box-header with-border">
              <div className="user-block">
                <img className="img-circle" src="../dist/img/user1-128x128.jpg" alt="User Image"/>
                <span className="username"><a href="#">Jonathan Burke Jr.</a></span>
                <span className="description">Shared publicly - 7:30 PM Today</span>
              </div>
              
              <div className="box-tools">
                <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Mark as read">
                  <i class="fa fa-circle-o"></i></button>
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            
            </div>
            
            <div className="box-body">
              <img className="img-responsive pad" src="../dist/img/photo2.png" alt="Photo"/>

              <p>I took this photo this morning. What do you guys think?</p>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
              <span className="pull-right text-muted">127 likes - 3 comments</span>
            </div>
        
            <div className="box-footer box-comments">
              <div className="box-comment">
                
                <img className="img-circle img-sm" src="../dist/img/user3-128x128.jpg" alt="User Image"/>

                <div className="comment-text">
                      <span className="username">
                        Maria Gonzales
                        <span className="text-muted pull-right">8:03 PM Today</span>
                      </span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                
              </div>
              
              <div className="box-comment">
            
                <img className="img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="User Image"/>

                <div className="comment-text">
                      <span className="username">
                        Luna Stark
                        <span className="text-muted pull-right">8:03 PM Today</span>
                      </span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                
              </div>
              
            </div>

            <div className="box-footer">
              <form action="#" method="post">
                <img className="img-responsive img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="Alt Text"/>
                 <div className="img-push">
                  <input type="text" className="form-control input-sm" placeholder="Press enter to post comment"/>
                </div>
              </form>
            </div>
        
          </div>
        
        </div>
        
        <div className="col-md-6">
        
          <div className="box box-widget">
            <div className="box-header with-border">
              <div className="user-block">
                <img className="img-circle" src="../dist/img/user1-128x128.jpg" alt="User Image"/>
                <span className="username"><a href="#">Jonathan Burke Jr.</a></span>
                <span className="description">Shared publicly - 7:30 PM Today</span>
              </div>
    
              <div className="box-tools">
                <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Mark as read">
                  <i class="fa fa-circle-o"></i></button>
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
        
            </div>
        
            <div className="box-body">
            
              <p>Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove right at</p>

              <p>the coast of the Semantics, a large language ocean.
                A small river named Duden flows by their place and supplies
                it with the necessary regelialia. It is a paradisematic
                country, in which roasted parts of sentences fly into
                your mouth.</p>

            
              <div className="attachment-block clearfix">
                <img className="attachment-img" src="../dist/img/photo1.png" alt="Attachment Image"/>

                <div className="attachment-pushed">
                  <h4 className="attachment-heading"><a href="http://www.lipsum.com/">Lorem ipsum text generator</a></h4>

                  <div className="attachment-text">
                    Description about the attachment can be placed here.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a href="#">more</a>
                  </div>
            
                </div>
            
              </div>
            
              <button type="button" className="btn btn-default btn-xs"><i class="fa fa-share"></i> Share</button>
              <button type="button" className="btn btn-default btn-xs"><i class="fa fa-thumbs-o-up"></i> Like</button>
              <span className="pull-right text-muted">45 likes - 2 comments</span>
            </div>
        
            <div className="box-footer box-comments">
              <div className="box-comment">
            
                <img className="img-circle img-sm" src="../dist/img/user3-128x128.jpg" alt="User Image"/>

                <div className="comment-text">
                      <span className="username">
                        Maria Gonzales
                        <span className="text-muted pull-right">8:03 PM Today</span>
                      </span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
            
              </div>
        
              <div className="box-comment">
            
                <img className="img-circle img-sm" src="../dist/img/user5-128x128.jpg" alt="User Image"/>

                <div className="comment-text">
                      <span className="username">
                        Nora Havisham
                        <span className="text-muted pull-right">8:03 PM Today</span>
                      </span>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                  'Content here, content here', making it look like readable English.
                </div>

              </div>
    
            </div>
            
            <div className="box-footer">
              <form action="#" method="post">
                <img className="img-responsive img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="Alt Text"/>
            
                <div className="img-push">
                  <input type="text" className="form-control input-sm" placeholder="Press enter to post comment"/>
                </div>
              </form>
            </div>
        
          </div>
          
        </div>
      </div>
    

    </section>

    </>
  );
}
export default Widget;