<template>
  <section style="background-color: #361e09; z-index: 1">
    <router-link :to="{ name: 'cgu' }">
      <p
        style="
          color: #fffbf7;
          font-size: 14px;
          padding: 2em 8em;
          text-decoration: white underline;
        "
      >
        Conditions générales d'utilisation
      </p>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
