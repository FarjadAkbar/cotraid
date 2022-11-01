<template>
  <div>
    <form ref="form" @submit.stop.prevent="createClick">
      <div class="form-group mb-1">
        <v-select v-model="roleSelected" :reduce="(option) => option.id" @input="permissionByrole" class="style-chooser"
          placeholder="Select Role" :options="roles" />
      </div>

      <div class="form-group mb-1">
        <v-select v-model="permissionSelected" :reduce="(option) => option.id" class="style-chooser"
          placeholder="Select Permission" :options="permission" taggable multiple />
      </div>
      <div class="form-group mb-1">
        <button type="submit" class="btn btn-info">Add Permission</button>
      </div>
    </form>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    vSelect
  },
  data() {
    return {
      roleSelected: '',
      permissionSelected: [],
      roles: [],
      permission: [],
    }
  },
  mounted() {
    this.getRoles();
    this.getPermissions();
  },
  methods: {
    async getRoles() {
      await this.$http.get('/api/auth/role').then(response => {
        for (let i in response.data) {
          this.roles.push({ id: response.data[i].id, label: response.data[i].name })
        }
      });
    },
    async getPermissions() {
      await this.$http.get('/api/auth/permission').then(response => {
        for (let i in response.data) {
          this.permission.push({ id: response.data[i].slug, label: response.data[i].name })
        }
      });
    },

    async createClick(event) {
      event.preventDefault()
      // Exit when the form isn't valid
      if (this.roleSelected == '') {
        this.$toast({
          component: ToastificationContent,
          props: {
            title: "Role required",
            icon: 'EditIcon',
            variant: 'danger',
          },

        })

      }

      else if (!this.permissionSelected.length) {
        this.$toast({
          component: ToastificationContent,
          props: {
            title: "At least one permission required",
            icon: 'EditIcon',
            variant: 'danger',
          },

        })

      }
      else {
        await this.$http.post('/api/auth/rolepermission/' + this.roleSelected, {
          slug: this.permissionSelected
        })
          .then((response) => {
            // Hide the modal manually
            this.$toast({
              component: ToastificationContent,
              props: {
                title: response.data.msg,
                icon: 'EditIcon',
                variant: 'success',
              },
            });
          }).catch((error) => {
            this.$toast({
              component: ToastificationContent,
              props: {
                title: response.data.msg,
                icon: 'EditIcon',
                variant: 'danger',
              },
            })
          });
      }
    },
    permissionByrole: function () {
      this.$http.get('/api/auth/getpermission/' + this.roleSelected).then(response => {
        this.permissionSelected = [];
        for (let i in response.data) {
          this.permissionSelected.push(response.data[i].slug)
        }
      })

    }
  }
}
</script>

<style>
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #ffffff;
  border: none;
  color: #000000;
  text-transform: lowercase;
  font-variant: small-caps;
  font-size: 16px;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #080808;
}
</style>