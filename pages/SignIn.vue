<template>
  <q-page-container>
    <q-page>
      <q-img class="fixed-top-left q-ml-xl q-mt-lg" src="~/assets/images/header_logo.png" width="150px"></q-img>
      <q-img class="fixed-bottom-left" src="~/assets/images/hr_login.png" width="400px"></q-img>

      <div class="row q-pt-xl">
        <div class="col">
          <q-card flat style="background: transparent;" class="my-card q-mt-lg q-ml-xl q-pt-xl ">
            <q-card-section>
              <div class="text-h4">
                Welcome to the <br /> <span class="text-bold text-h3" style="color:#21ba45">Human Resource </span>
                <span class="text-bold text-h3">Management Solution!</span>
              </div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h6"
              style="text-shadow: 0px 3px 3px white, 0px 4px 10px white, 0px 0px 0px white; color:green">
              We are thrilled to have you here.
              Our platform is designed to streamline your HR processes and make your work life easier.
              With our comprehensive suite of tools, you can manage employee information, track time
              and attendance, process payroll, and much more.
            </q-card-section>

            <!-- <q-separator inset />

            <q-card-section>
              To access the platform, please enter your login credentials.
              If you have any questions or concerns, our support team is always available to assist you.
              Thank you for choosing the HR Management Solution!
            </q-card-section> -->

          </q-card>

        </div>
        <div class="col flex flex-center q-mt-sm">
          <q-card flat bordered style="border-radius:10px; width: 50%;">
            <q-img src="~/assets/images/Account.gif"></q-img>

            <q-card-section class="q-py-none">
              <!-- <q-avatar size="94px" class="absolute" style="top: 0; right: 25px;transform: translateY(-50%);">
                <img src="~/assets/images/wbameta.png" />
              </q-avatar> -->
              <div class="row no-wrap items-center">
                <div class="col text-h5 text-bold ellipsis">
                  Sign In
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <q-form class="q-gutter-md">
                <q-input color="positive" outlined  dense v-model="username" label="Email" lazy-rules>
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                  <!-- <template v-slot:append>
                    <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                  </template> -->
                </q-input>

                <q-input color="positive" type="password" outlined  dense v-model="password" label="Password" lazy-rules >
                  <template v-slot:prepend>
                    <q-icon name="key" />
                  </template>
                  <!-- <template v-slot:append>
                    <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                  </template> -->
                </q-input>

                <q-card-actions >
                  <q-btn glossy  label="Sign In" to="/" type="button" color="positive" @click="loginNotify" />


                  <q-btn  label="Forgot Password?" to="/" flat color="positive" @click="loginNotify" />
                </q-card-actions>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>


    </q-page>



  </q-page-container>
</template>



<script>

definePageMeta({
  layout: "blank",
});


export default {
  
}
</script>



<style scoped>
.align-center {
  height: 100vh;
  /* Set the height of the container to the viewport height */
}

.text-center {
  margin: auto;
  /* Center the image horizontally */
}</style>