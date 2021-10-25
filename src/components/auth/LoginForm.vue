<template>
  <form class="ma-5" align="center">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="ID"
      required
      filled
      dense
      color="primary"
      rounded
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="PASSWORD"
      required
      filled
      dense
      rounded
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-btn rounded block class="mr-4 mb-4" @click="submit" color="#EFB775"
      >로그인
    </v-btn>
    <v-btn rounded block outlined @click="join" class="mb-4" color="#EFB775">
      회원가입
    </v-btn>
    <v-btn rounded block class="mb-4" color="#EFB775" :href="`https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}`">
      구글 피트니스
    </v-btn>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    client_id:
      "515071488860-s2aoiepptpuhc5tkj18qj763iq1b1lf9.apps.googleusercontent.com",
    redirect_uri: "http://teng.169.56.174.139.nip.io/auth/google/callback",
    response_type: "code",
    scope: "https://www.googleapis.com/auth/fitness.activity.read",
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
    join() {
      this.$router.push({ name: "Join" });
    },
    google() {
      // window.open(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}`);
      // this.$axios.get(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}`)
      // .then((res) => {
      //     console.log(res);
      // })
      // .catch((err) => {
      //     console.log(err);
      // })
    },
  },
};
</script>
