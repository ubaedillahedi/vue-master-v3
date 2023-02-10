<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <router-link :to="{ name: 'transaction.index' }" class="btn btn-warning btn-sm rounded shadow mb-3">Back</router-link>

        <div class="card rounded shadow">
          <div class="card-header">
            Transaction Edit
          </div>
          <div class="card-body">
            <form @submit.prevent="update()">
              <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" name="title" class="form-control" id="title" v-model="transaction.title">
                <div class="text-danger" v-if="validation.title">
                  {{ validation.title[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="amount" class="form-label">Amout</label>
                <input type="number" name="amount" class="form-control" id="amount" v-model="transaction.amount">
                <div class="text-danger" v-if="validation.amount">
                  {{ validation.amount[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="time" class="form-label">Time</label>
                <input type="text" name="time" class="form-control" id="time" placeholder="yyyy-mm-dd hh:mm:ss" v-model="transaction.time">
                <div class="text-danger" v-if="validation.time">
                  {{ validation.time[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="type" class="form-label">Type</label>
                <select id="type" class="form-select" v-model="transaction.type">
                  <option value="expense">Expense</option>
                  <option value="revenue">Revenue</option>
                </select>
                <div class="text-danger" v-if="validation.type">
                  {{ validation.type[0] }}
                </div>
              </div>
              <button class="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {reactive, ref} from 'vue'
  import {useRouter} from 'vue-router'
  import axios from 'axios'
  export default {
    setup() {
      // data binding
      const transaction = reactive({
        title: '',
        amount: '',
        time: '',
        type: '',
      })

      const validation = ref([])
      const router = useRouter()

      function store(){
        axios.post('http://127.0.0.1:8000/api/transaction', transaction)
        .then(()=>{
          router.push({
            name: 'transaction.index'
          })
        }).catch((err) => {
          // console.log()
          // console
          validation.value = err.response.data.message
        })
      }

      return {
        transaction,
        validation,
        router,
        store
      }

    }
  }
</script>