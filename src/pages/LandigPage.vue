<script></script>

<template lang="">
  <div class="text-2xl max-w-[100vw] h-[100vh]">
    <div
      class="text-[#000] pt-28 lg:pt-0 h-[30rem] lg:h-[70vh] flex flex-col lg:flex-row lg:items-center 
			 lg:justify-around  headerLanding"
    >
      <div class="flex flex-col pl-5 lg:pl-0 lg:max-w-[60%] items-start">
        <h1
          class="font-extrabold text-[#fff] text-5xl lg:text-[6rem] xl:text-[6rem] 2xl:text-[5rem] mim-w-[22rem] mb-5"
        >
          Construyendo Futuros Juntos
        </h1>
        <span class="text-sm lg:text-md font-light  text-[#fff] lg:max-w-[100%]"
          >NovaUniversitas y COBAO unidos para tu educación superior</span
        >
        <button
          class="bg-[#FFB81C] text-black hover:bg-[#ffa500] text-lg rounded-[10px] px-2  mt-3"
        >
          <RouterLink to="/login" class="text-sm text-[#ffffff] font-bold">conoce mas</RouterLink>
        </button>
      </div>
      <div
        class="flex flex-row lg:mt-0 pl-5 lg:pl-0 justify-start gap-12 lg:gap-5 items-end lg:max-w-[30%]"
      >
        <div class="p-5 rounded-lg">
          <img src="../assets/logoTres.png" class="bg-cover h-24 lg:h-50" />
        </div>
        <div class=" pt-2 rounded-lg">
          <img
            src="../assets/logo_cobao-removebg-preview.png"
            class="bg-cover h-24 lg:h-50"
          />
        </div>
      </div>
    </div>
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-12 text-[#006838]"
        >
          ¿Por qué NovaUniversitas?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4 text-[#006838]">
              Excelencia Académica
            </h3>
            <p class="text-gray-600">
              Programas educativos de alta calidad diseñados para tu futuro
              profesional.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4 text-[#006838]">
              Infraestructura Moderna
            </h3>
            <p class="text-gray-600">
              Instalaciones y equipamiento de última generación para tu
              formación.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4 text-[#006838]">
              Vinculación Empresarial
            </h3>
            <p class="text-gray-600">
              Conexiones con el sector productivo para tu desarrollo
              profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Nova Universitas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.headerLanding {
  background: -webkit-linear-gradient(171deg, #008f45, #08683b, #091b08);
  background: linear-gradient(171deg, #008f45, #08683b, #091b08);
}
</style>
