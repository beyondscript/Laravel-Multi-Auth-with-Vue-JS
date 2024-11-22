<template>
	<aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div class="sidenav-header">
      <i class="fa fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" style="color: #DE2768 !important; padding: 0.5rem !important; margin-right: 8px;" aria-hidden="true" id="iconSidenav"></i>
      <router-link class="navbar-brand m-0" style="padding: 1.5rem 0.7rem 1.5rem 0.7rem;" :to="{name: 'Home'}">
        <img :src="'/assets/img/logo-ct.webp'" class="navbar-brand-img h-100">
        <span class="ms-1 font-weight-bold text-white" style="color: #2E4AFF !important;">{{$store.getters.getAppName}}</span>
      </router-link>
    </div>
    <hr class="horizontal light mt-0 mb-2" style="background-color: #E22D6C;">
    <div class="collapse navbar-collapse  w-auto" style="height: unset; margin-bottom: 10px;" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link text-white" :to="{name: 'proDashboard'}">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10" style="color: #FFFF00 !important;">dashboard</i>
            </div>
            <span class="nav-link-text ms-1" style="color: #FFFF00 !important;">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" :to="{name: 'proProfile'}">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10" style="color: #FFFF00 !important;">person</i>
            </div>
            <span class="nav-link-text ms-1" style="color: #FFFF00 !important;">Profile</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
<style scoped>
  .router-link-active{
    border-right-width: 0;
    border-bottom-width: 0;
    background-color: #c7c7c733;
    color: #fff!important;
    font-weight: 400 !important;
    box-shadow: 0 4px 6px -1px #0000001a, 0 2px 4px -1px #0000000f;
    border-radius: 0.375rem !important;
    margin-top: 1.5px !important;
    margin-bottom: 1.5px !important;
    background-image: linear-gradient(195deg,#ec407a,#d81b60);
  }
</style>