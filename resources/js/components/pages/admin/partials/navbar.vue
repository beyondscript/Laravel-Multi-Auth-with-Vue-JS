<template>
		<!-- Navbar -->
    <nav id="navbar_main" class="navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky" style="margin-top: 1rem !important" data-scroll="true">
      <div class="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <h6 class="font-weight-bolder mb-0" style="padding-top: 7px;">Admin</h6>
        </nav>
        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div class="ms-md-auto pe-md-3 d-flex align-items-center"></div>
          <ul class="navbar-nav  justify-content-end">
            <li class="nav-item d-flex align-items-center">
              <button class="nav-link text-body font-weight-bold px-0" style="background-color: transparent; border: none;" type="button" @click="logoutUser">
                <i class="fa fa-sign-out"></i>
                <span class="d-sm-inline d-none"> Log Out</span>
              </button>
            </li>
            <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
              <button type="button" class="nav-link text-body p-0" style="background-color: transparent; border: none;" id="iconNavbarSidenav">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
</template>
<script>
  import auth from '../../../../../js/composables/auth';
  export default{
    setup(){
      const { logout } = auth()
      const logoutUser = async() => {
        await logout()
      }
      return{
        logoutUser
      }
    }
  }
</script>