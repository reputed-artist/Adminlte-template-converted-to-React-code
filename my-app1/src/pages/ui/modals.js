import React from 'react';

function Modals() {
  return (
    <>
      <section className="content">
        <div className="callout callout-info">
          <h4>Reminder!</h4>
          Instructions for how to use modals are available on the
          <a href="http://getbootstrap.com/javascript/#modals">Bootstrap documentation</a>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="box box-default">
              <div className="box-header with-border">
                <h3 className="box-title">Modal Examples</h3>
              </div>
              <div className="box-body">
                <a className="btn btn-default" data-toggle="modal" data-target="#modal-default1">
                  Launch Default Modal1
                </a>

                <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-default">
                  Launch Default Modal
                </button>

                <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modal-info">
                  Launch Info Modal
                </button>
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal-danger">
                  Launch Danger Modal
                </button>
                <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#modal-warning">
                  Launch Warning Modal
                </button>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-success">
                  Launch Success Modal
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="modal-default1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Default Modal1</h4>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="modal-default">
          <div className="modal-dialog" style={{ width: "80%" }}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Default Modal</h4>
              </div>
              
              <div className="modal-body">
                <form className="form-horizontal style-form" name="form" id="form" method="post">
                  <p style={{ color: "#F00" }}></p>

                  <table className="col-lg-12">
                    <tbody>
                      <tr>
                        <div className="box-body"> 
                          <td>
                            <div className="form-group">
                              <label id="cid" className="col-lg-4 control-label">Product Id</label>
                              <div className="col-lg-8">
                                <input type="text" className="form-control" name="pid" id="pid" readOnly />
                              </div>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td>
                            <form action="" method="post" id="imgform" encType="multipart/form-data">
                              <div className="form-group">
                                <label id="ftype" className="col-lg-4 control-label">File input</label>
                                <div className="col-lg-8">
                                  <div className="input-group">
                                    <div className="input-group-btn">
                                      <label className="btn btn-primary" htmlFor="file_input">Choose File</label>
                                      <input type="file" id="file_input" style={{ display: "none" }} />
                                    </div>
                                    <input type="text" className="form-control" id="file_name" placeholder="No file chosen" readOnly />
                                  </div>
                                  <div id="file_input_error" style={{ color: "red" }}></div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </div>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-group">
                            <label id="c_name" className="col-lg-4 control-label">Product Name <span style={{ color: "red" }}>*</span></label>
                            <div className="col-lg-8">
                              <input type="text" className="form-control" id="pname" name="pname" placeholder="Product Name" />
                              <div id="pname_error" style={{ color: "red" }}> </div>
                            </div>
                          </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                          <div className="form-group">
                            <label id="xftype" className="col-sm-4 control-label"> Display uploaded Image:</label>
                            <div className="col-sm-8">
                              <img alt="Uploaded Image" id="uploadimg" src="/public/dist/img/default.jpg" height="200px" width="350px" />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-group">
                            <label id="c_add" className="col-sm-4 control-label">Description <span style={{ color: "red" }}>*</span></label>
                            <div className="col-sm-8">
                              <textarea className="form-control" name="pdesc" id="pdesc" placeholder="Description"></textarea>
                              <div id="pdesc_error" style={{ color: "red" }}> </div>
                            </div>
                          </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                          <div className="form-group">
                            <label id="techslbl" className="col-sm-4 control-label">Technical Description</label>
                            <div className="col-sm-8">
                              <textarea className="form-control" name="techs" id="techs" placeholder="Technical Description" rows="4"></textarea>
                              <div id="techs_error" style={{ color: "red" }}> </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-group">
                            <label id="c_add" className="col-sm-4 control-label">HSN Code<span style={{ color: "red" }}>*</span></label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control" name="hsn" id="hsn" placeholder="HSN Code" />
                              <div id="hsn_error" style={{ color: "red" }}> </div>
                            </div>
                          </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                          <div className="form-group">
                            <label id="c_add" className="col-sm-4 control-label">Creation Date</label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control" name="created" readOnly />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-group">
                            <label id="type" className="col-sm-4 control-label">Product Type <span style={{ color: "red" }}>*</span></label>
                            <div className="col-sm-8">
                              <select name="ptype" className="form-control select2" style={{ height: "34px", width: "100%" }} id="ptype">
                                <option value=""></option>
                                <option value="Machine">Machine</option>
                                <option value="Consumables">Consumables</option>
                                <option value="Freight">Freight</option>
                              </select>
                              <div id="ptype_error" style={{ color: "red" }}>  </div>
                            </div>
                          </div>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="modal modal-primary fade" id="modal-primary">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Primary Modal</h4>
              </div>
              <div className="modal-body">
                <p>One fine body&hellip;</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-outline">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal modal-info fade" id="modal-info">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Info Modal</h4>
              </div>
              <div className="modal-body">
                <p>One fine body&hellip;</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-outline">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal modal-warning fade" id="modal-warning">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Warning Modal</h4>
              </div>
              <div className="modal-body">
                <p>One fine body&hellip;</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-outline">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal modal-success fade" id="modal-success">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Success Modal</h4>
              </div>
              <div className="modal-body">
                <p>One fine body&hellip;</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-outline">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal modal-danger fade" id="modal-danger">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Danger Modal</h4>
              </div>
              <div className="modal-body">
                <p>One fine body&hellip;</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-outline">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Modals;