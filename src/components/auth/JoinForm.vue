<template>
  <div>
    <div class="mt-2">
      <span class="body-2 ml-5 mb-0">나의 캐릭터 🤝</span>
      <v-row no-gutters justify="center" align="center">
        <v-avatar class="mr-2 ml-2">
          <img src="../../assets/따봉아거.png" alt="John" />
        </v-avatar>
        <v-avatar class="mr-3">
          <img src="../../assets/곰1.png" alt="John" />
        </v-avatar>
        <v-avatar class="mr-3">
          <img src="../../assets/악어1.png" alt="John" />
        </v-avatar>

        <v-avatar class="mr-3">
          <img src="../../assets/작은하트라무.png" alt="John" />
        </v-avatar>

        <v-avatar class="mr-3">
          <img src="../../assets/토끼1.png" alt="John" />
        </v-avatar>
      </v-row>
      <v-row no-gutters justify="center" align="center">
        <v-chip-group
          v-model="selection"
          active-class="orange--text text--darken-4"
          class="font-weight-black"
          mandatory
        >
          <v-chip class="jello-vertical">콜리</v-chip>
          <v-chip class="jello-vertical">비비</v-chip>
          <v-chip class="jello-vertical">아거</v-chip>
          <v-chip class="jello-vertical">라무</v-chip>
          <v-chip class="jello-vertical">토끼</v-chip>
        </v-chip-group>
      </v-row>
    </div>
    <span class="body-2 ml-5 mb-0">나의 정보 🧒🏻</span>
    <form class="ma-5" align="center">
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        label="이름"
        required
        filled
        dense
        color="primary"
        rounded
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="userId"
        :rules="[rules.required, rules.min]"
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
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="PASSWORD"
        hint="At least 8 characters"
        counter
        filled
        dense
        rounded
        @click:append="show1 = !show1"
      ></v-text-field>
      <v-btn rounded block class="mr-4 mb-4" @click="submit" color="#EFB775"
        >가입
      </v-btn>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required },
    email: { required, email },
    password: { required, maxLength: maxLength(10) },
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
    userId: "",
    password: "",
    selection: 0,
    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    client_id:
      "515071488860-s2aoiepptpuhc5tkj18qj763iq1b1lf9.apps.googleusercontent.com",
    redirect_uri: "http://teng.169.56.174.139.nip.io/auth/google/callback",
    response_type: "code",
    scope: "https://www.googleapis.com/auth/fitness.activity.read",
    access_type: "offline",
    approval_prompt: "force",
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

      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    idErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength &&
        errors.push("ID must be at most 5 characters long");
      !this.$v.name.required && errors.push("ID is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength &&
        errors.push("Password must be at most 10 characters long");
      !this.$v.password.required && errors.push("Password is required.");
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
    submit: function () {
      this.$v.$touch();
      const userInfo = {
        characterId: this.selection + 1,
        name: this.name,
        username: this.userId,
        password: this.password,
        passwordConfirmation: this.password,
      };
      console.log(userInfo);

      this.addUser(userInfo);
      // this.clear();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.userId = "";
      this.password = "";
      this.select = null;
      this.checkbox = false;
    },
    ...mapActions(["addUser"]),
  },
};
</script>

<style scoped>
.v-chip:focus.jello-vertical {
  -webkit-animation: jello-vertical 0.9s both;
  animation: jello-vertical 0.9s both;
}

/* ----------------------------------------------
 * Generated by Animista on 2021-10-21 15:0:19
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation jello-vertical
 * ----------------------------------------
 */
@-webkit-keyframes jello-vertical {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  40% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  50% {
    -webkit-transform: scale3d(0.85, 1.15, 1);
    transform: scale3d(0.85, 1.15, 1);
  }
  65% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  75% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes jello-vertical {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  40% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  50% {
    -webkit-transform: scale3d(0.85, 1.15, 1);
    transform: scale3d(0.85, 1.15, 1);
  }
  65% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  75% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>
