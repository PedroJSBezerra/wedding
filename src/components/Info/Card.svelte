<div class="card">
  <slot></slot>
</div>

<style>
  .card{
    display: flex;
    align-items: center;
    width: 260px;
  }
  .card:last-child{
    margin-bottom: 40px;
  }
</style>