<template>
  <form class="ma-5" align="center">
      <v-text-field
        v-model="userId"
        :rules="[rules.required]"
        label="ID"
        required
        filled
        dense
        color="primary"
        rounded
      ></v-text-field>
    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="PASSWORD"
      filled
      dense
      rounded
      @click:append="show1 = !show1"
    ></v-text-field>
    <v-btn rounded block class="mr-4 mb-4" @click="submit" color="#EFB775"
      >로그인
    </v-btn>
    <v-btn rounded block outlined @click="join" class="mb-4" color="#EFB775">
      회원가입
    </v-btn>
  </form>
</template>

<script>
import { mapActions } from "vuex";
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
    userId: "tengteng",
    password: "passw0rd",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
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
      const userInfo = {
        username: this.userId,
        password: this.password,
      };
      this.loginUser(userInfo);
      this.clear();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
      this.userId = "";
      this.password = "";
    },
    join() {
      this.$router.push({ name: "Join" });
    },
    ...mapActions(["loginUser"]),
  },
};
</script>
