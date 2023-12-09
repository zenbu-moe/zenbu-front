<template>
    <div class="navigation">
        <div class="wrapper links">
            <div class="logo">全</div>
            <NuxtLink to="/feed">Feed</NuxtLink>
            <NuxtLink to="/anime">Anime</NuxtLink>
            <NuxtLink to="/manga">Manga</NuxtLink>
            <NuxtLink to="/light-novels">Light Novels</NuxtLink>
            <NuxtLink to="/community">Community</NuxtLink>
        </div>

        <div class="wrapper search">
            <input placeholder="Search" id="search">
            <i class="bi bi-search"></i>
        </div>

        <div class="wrapper ">
            <i class="bi bi-inbox"></i>
            <i class="bi bi-bell"></i>
            <UserAvatar />
            <i class="bi bi-chevron-down"></i>
        </div>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: var(--link-inactive);
    font-weight: 700;
}

.active {
    color: var(--text-primary);
}

.navigation {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 540px 220px 300px;
    column-gap: 20px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    animation: fade-in-bottom 0.5s ease-out;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--foreground);
    border-radius: 8px;
    padding: 14px 14px;
}

.links {
    a {
        margin: 0 14px;
        /* white-space: nowrap; */
    }
}

.logo {
    width: 32px;
    height: 32px;
    margin: 0 14px;
    font-family: "Dela Gothic One";
    font-size: 32px;
    margin-top: -16px;
}

.search {
    input {
        background: none;
        border: none;
        font-family: "Nunito";
        font-size: 1em;
        font-weight: 700;
        margin: 0 12px;
        width: 120px;
    }

    input:focus {
        outline: none;
    }

    i {
        margin: 0 12px;
    }
}

.wrapper {
    i {
        margin: 0 12px;
        font-size: 18px;
    }
}

@keyframes fade-in-bottom {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
