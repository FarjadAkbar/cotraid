<template>
  <div>
    <b-button
      v-b-modal.modal-create
      class="btn btn-primary m-2 fload-end"
    >
      Add Role
    </b-button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Name
          </th>
          <th scope="col">
            Slug
          </th>
          <th scope="col">
            Date
          </th>
          <th scope="col">
            Action
          </th>
        </tr>
      </thead>
      <tbody v-for="role in roles">
        <tr>
          <th scope="row">
            {{ role.id }}
          </th>
          <td>{{ role.name }}</td>
          <td>{{ role.slug }}</td>
          <td>{{ role.created_at }}</td>
          <td>
            <b-button
              id="edit-button"
              type="button"
              class="btn btn-success mr-1"
              @click="editClick(role)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </b-button>
            <b-button
              type="button"
              class="btn btn-danger mr-1"
              @click="deleteClick(role.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                />
              </svg>
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>

    <b-modal
      id="modal-create"
      ref="create-modal"
      title="Create Role"
      @ok="createClick"
      @hidden="resetModal"
    >
      <form
        ref="form"
        @submit.stop.prevent="createClick"
      >
        <div class="input-group mb-3">
          <span class="input-group-text">Name</span>
          <input
            v-model="roleName"
            type="text"
            class="form-control"
            :state="nameState"
            required
          >
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Slug</span>
          <input
            v-model="roleSlug"
            type="text"
            class="form-control"
            :state="slugState"
            required
          >
        </div>
      </form>
    </b-modal>

    <b-modal
      id="modal-edit"
      ref="modal-edit"
      title="Edit Role"
      @ok="updateClick"
      @hidden="resetModal"
    >
      <form
        ref="form"
        @submit.stop.prevent="editClick"
      >
        <div class="input-group mb-3">
          <span class="input-group-text">Name</span>
          <input
            v-model="roleName"
            type="text"
            class="form-control"
            :state="nameState"
            required
          >
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Slug</span>
          <input
            v-model="roleSlug"
            type="text"
            class="form-control"
            :state="slugState"
            required
          >
        </div>
      </form>
    </b-modal>

  </div>

</template>

<script>
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {

  data() {
    return {
      roles: [],
      roleID: 0,
      roleName: '',
      roleSlug: '',
      nameState: null,
      slugState: null,
    }
  },
  mounted() {
    this.reload()
  },
  methods: {
    reload() {
      this.$http.get('/api/auth/role').then(response => (this.roles = response.data))
      this.$forceUpdate()
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      this.slugState = valid
      return valid
    },
    resetModal() {
      this.roleName = ''
      this.roleSlug = ''
      this.nameState = null
      this.slugState = null
    },
    editClick(role) {
      this.$refs['modal-edit'].show()
      this.roleID = role.id
      this.roleName = role.name
      this.roleSlug = role.slug
    },
    async createClick(event) {
      event.preventDefault()
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }

      await this.$http.post('/api/auth/role', {
        name: this.roleName,
        slug: this.roleSlug,
      })
        .then(response => {
          // Hide the modal manually
          this.reload()
          this.$nextTick(() => {
            this.$bvModal.hide('modal-create')
          })

          this.$toast({
            component: ToastificationContent,
            props: {
              title: response.data.msg,
              icon: 'EditIcon',
              variant: 'success',
            },
          })
        })
        .catch(error => {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: response.data.msg,
              icon: 'EditIcon',
              variant: 'danger',
            },
          })
        })
    },
    async updateClick(event) {
      event.preventDefault()
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      await this.$http.put(`/api/auth/role/${this.roleID}`, {
        name: this.roleName,
        slug: this.roleSlug,
      })
        .then(response => {
          // Hide the modal manually
          this.reload()
          this.$nextTick(() => {
            this.$bvModal.hide('modal-edit')
          })
          this.$toast({
            component: ToastificationContent,
            props: {
              title: response.data.msg,
              icon: 'EditIcon',
              variant: 'success',
            },

          })
        })
        .catch(error => {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: response.data.msg,
              icon: 'EditIcon',
              variant: 'danger',
            },
          })
        })
    },
    async deleteClick(id) {
      if (!confirm('Are you sure?')) {
        return
      }
      await this.$http.delete(`/api/auth/role/${id}`)
        .then(response => {
          this.reload()
          this.$toast({
            component: ToastificationContent,
            props: {
              title: response.data.msg,
              icon: 'EditIcon',
              variant: 'success',
            },

          })
        })
        .catch(error => {
          console.log(error)

          this.$toast({
            component: ToastificationContent,
            props: {
              title: response.data.msg,
              icon: 'EditIcon',
              variant: 'danger',
            },
          })
        })
    },
  },
}
</script>
