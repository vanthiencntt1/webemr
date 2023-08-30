import './Phieuchamsoc.css'

const Phieuchamsoc = () => {



    return (<>
        <div class="container">

            <form class="well form-horizontal" action=" " method="post" id="contact_form">
                <fieldset>
                    <legend><center><h2>THÔNG TIN HÀNH CHÍNH</h2></center></legend>

                    <div class="form-group">
                        <span>Mã Bệnh Nhân</span>
                        <div class="col-md-4 ">
                            <div class="input-group">
                                <input name="first_name" placeholder="First Name" class="form-control" type="text" />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <span>Họ Tên</span>
                        <div class="col-md-4 ">
                            <div class="input-group">
                                <input name="first_name" placeholder="First Name" class="form-control" type="text" />
                            </div>
                        </div>
                    </div>



                    <div class="form-group">
                        <div class="col-md-4 selectContainer">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
                                <select name="department" class="form-control selectpicker">
                                    <option value="">Select your Department/Office</option>
                                    <option>Department of Engineering</option>
                                    <option>Department of Agriculture</option>

                                </select>
                            </div>
                        </div>
                    </div>

                </fieldset>
            </form>
        </div>



    </>)
}

export default Phieuchamsoc