<template>
  <form>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
      <div class="flex flex-col align-items-center mb-3 gap-2">
        <label for="firstName">
          First Name
          <b class="fw-bold text-danger-300">*</b>
        </label>
        <InputText placeholder="Enter your first name" :class="{ 'p-invalid': firstNameErrorMessage }" id="firstName"
          v-model="firstName" />
        <small v-show="firstNameErrorMessage" id="text-error" class="p-error">{{ firstNameErrorMessage || '&nbsp;'
        }}</small>

      </div>
      <div class="flex flex-col align-items-center mb-3 gap-2">
        <label for="lastName">
          Last Name
          <b class="fw-bold text-danger-300">*</b>
        </label>
        <InputText placeholder="Enter your last name" id="lastName" :class="{ 'p-invalid': lastNameErrorMessage }"
          v-model="lastName" />
        <small v-show="lastNameErrorMessage" id="text-error" class="p-error">{{ lastNameErrorMessage || '&nbsp;'
        }}</small>

      </div>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-2">
      <div class="flex flex-col align-items-center mb-3 gap-2">
        <label for="mobilePhone">
          Mobile Phone
          <b class="fw-bold text-danger-300">*</b>

        </label>
        <InputMask v-model="mobilePhone" id="mobilePhone" :class="{ 'p-invalid': mobilePhoneErrorMessage }" date="phone"
          mask="(999) 999-999-999" placeholder="Enter your mobile phone" />

        <small v-show="mobilePhoneErrorMessage" id="text-error" class="p-error">{{ mobilePhoneErrorMessage || '&nbsp;'
        }}</small>

      </div>

      <div class="flex flex-col align-items-center mb-3 gap-2">
        <label for="email">
          Email
          <b class="fw-bold text-danger-300">*</b>

        </label>
        <InputText placeholder="Enter your email" :class="{ 'p-invalid': emailErrorMessage }" id="email" v-model="email"
          aria-describedby="username-help" />
        <small v-show="emailErrorMessage" id="text-error" class="p-error">{{ emailErrorMessage || '&nbsp;' }}</small>

      </div>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-2">
      <div class="flex flex-col align-items-center mb-3 gap-2">
        <label for="nationality">
          Nationality
          <b class="fw-bold text-danger-300">*</b>
        </label>
        <InputText placeholder="Enter Your Nationality" :class="{ 'p-invalid': nationalityErrorMessage }" id="nationality"
          v-model="nationality" aria-describedby="username-help" />
        <small v-show="nationalityErrorMessage" id="text-error" class="p-error">{{ nationalityErrorMessage || '&nbsp;'
        }}</small>

      </div>

      <div class="flex flex-col align-items-center mb-3 gap-2">
        <label for="expectedMonthlySalary">Expected monthly salary

          <b class="fw-bold text-danger-300">*</b>

        </label>
        <div class="flex flex-wrap gap-2">
          <div class="flex flex-1 flex-col items-start mb-3 gap-2">
            <InputNumber placeholder="Enter your expected monthly salary" class="w-full" mode="currency"
              :currency="selectedCurancy || 'USD'" locale="de-DE"
              :class="{ 'p-invalid': expectedMonthlySalaryErrorMessage }" id="expectedMonthlySalary"
              v-model="expectedMonthlySalary" aria-describedby="username-help" />
            <small v-show="expectedMonthlySalaryErrorMessage" id="text-error" class="p-error">{{
              expectedMonthlySalaryErrorMessage || '&nbsp;' }}</small>
          </div>
          <div class="flex flex-col items-start mb-3 gap-2">
            <Dropdown :class="{ 'p-invalid': selectedCurancyErrorMessage }" v-model="selectedCurancy"
              :options="curancyOptions" optionLabel="code" placeholder="The Currency" optionValue="code"
              class="h-39px xl:w-12rem lg:w-10rem w-8rem" />
            <small v-show="selectedCurancyErrorMessage" id="text-error" class="p-error">{{ selectedCurancyErrorMessage
              || '&nbsp;' }}</small>
          </div>
        </div>
      </div>
    </div>

    <div class="grid  md:grid-cols-1 grid-cols-1 gap-4 mt-2">
      <div class="flex flex-col align-items-center mb-3 gap-2 ">
        <label for="username">Attach Resume
          <b class="fw-bold text-danger-300">*</b>

        </label>
        <div class="uploader-file flex flex-col gap-4 justify-center items-center">
          <span>
            Drag and drop file here to upload
          </span>
          <FileUpload mode="basic" name="demo[]" url="" accept="application/pdf , application/msword"
            :maxFileSize="1000000" />
        </div>
      </div>
      <div class="flex flex-col align-items-center mb-3 gap-2">
        <label for="username">
          Attach Your Photo
          <span class="text-primary-500">
            (optional)
          </span>
        </label>
        <FileUpload :showCancelButton="false" :showUploadButton="false" name="demo[]" url="/" :multiple="true"
          accept="image/*" :maxFileSize="1000000">
          <template #empty>
            <p>Drag and drop files to here to upload.</p>
          </template>
        </FileUpload>
      </div>


    </div>

    <div class="flex flex-col align-items-center mb-3 gap-2">
      <label for="coverLetter">
        Cover Letter
        <span class="text-primary-500">
          (optional)
        </span>
      </label>
      <Textarea id="coverLetter" autoResize v-model="coverLetter" rows="4" cols="30" aria-describedby="text-error" />
    </div>

    <portal to="jobFormFooter">
      <div class="mt-6 flex justify-end">
        <Button @click="onSubmit"
          class="lg:w-auto w-full fw-bold text-secondary-900 bg-secondary-300 border-secondary-300 hover:bg-secondary-400 hover:border-secondary-400 transition duration-300 ease-linear mb-2"
          label="Submit Application" />
      </div>
    </portal>



  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { useAppStore } from '@/stores/appStore';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import FileUpload from 'primevue/fileupload';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import InputMask from 'primevue/inputmask';
import { useField, useForm } from 'vee-validate';
import { useSweetAlert } from '@/composables/useSweetAlert';
const appStore = useAppStore();
const { handleSubmit, resetForm } = useForm();
type Curancy = {
  name: string;
  code: string;
};
const curancyOptions: Curancy[] = [
  { name: 'AED', code: 'AED' },
  { name: 'USD', code: 'USD' },
  { name: 'EUR', code: 'EUR' },
];
const coverLetter: Ref<string> = ref('');
const validateField = (value: string, errorMessage: string, regex?: RegExp) => {
  if (regex && (!value || !regex.test(value))) {
    return errorMessage;
  }
  if (!value) {
    return errorMessage;
  }
  return true;
};
const { value: firstName, errorMessage: firstNameErrorMessage } = useField('firstName', (value: string) => validateField(value, 'First Name is required', /^[a-zA-Z]+$/));
const { value: lastName, errorMessage: lastNameErrorMessage } = useField('lastName', (value: string) => validateField(value, 'Last Name is required'));
const { value: mobilePhone, errorMessage: mobilePhoneErrorMessage } = useField('mobilePhone', (value: string) => validateField(value, 'Mobile Phone is required'));
const { value: email, errorMessage: emailErrorMessage } = useField('email', (value: string) => validateField(value, 'Please enter a valid email address', /^[^\s@]+@[^\s@]+\.[^\s@]+$/));
const { value: nationality, errorMessage: nationalityErrorMessage } = useField('nationality', (value: string) => validateField(value, 'Nationality is required'));
const { value: expectedMonthlySalary, errorMessage: expectedMonthlySalaryErrorMessage } = useField('expectedMonthlySalary', (value: any) => validateField(value, 'Expected monthly salary is required'));
const { value: selectedCurancy, errorMessage: selectedCurancyErrorMessage } = useField('selectedCurancy', (value: string) => validateField(value, 'Currency is required'));

const onSubmit = handleSubmit(() => {
  appStore.jobDialogIsVisible = false;
  appStore.sideBarJobsIsVisible = false;
  resetForm();
  const swalOption = {
    title: 'Thank you for your application',
    text: 'We will review your application and get back to you as soon as possible.',
    icon: 'success',
    showCancelButton: false,
    confirmButtonText: 'OK',
  };
  useSweetAlert(swalOption)
});
onMounted(() => {
  selectedCurancy.value = curancyOptions[0].code;
});
</script>

<style scoped></style>