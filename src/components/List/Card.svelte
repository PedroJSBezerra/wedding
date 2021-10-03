<script>
  import { fly, fade } from 'svelte/transition'
  import { setOwner, check_owner, handleChecked } from '../../lib/firebase'

  export let section
  export let item
  export let index
</script>


<li in:fly={{ y: 200 }}>
  <input 
    id={item.name}
    type="checkbox" 
    disabled={check_owner(item)}
    checked={handleChecked(item)}
    on:click={() => {setOwner(item, index, section.id)}}
  >
  <label for={item.name}>
    <img src="{item.photoUrl}" alt="">
    {item.name}
  </label>
</li>

<style>
  li{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  input[type=checkbox]{
    /* display: none; */
    position: absolute;
    width: 20px;
    height: 20px;
    top: 56%;
  }
  input[type=checkbox]:checked + label{
    border: 2px solid green;
  }
  input[type=checkbox]:disabled + label{
    opacity: .5;
    text-decoration: line-through;
  }
  label{
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    height: 180px;
    width: 120px;
    border: 2px solid rgba(0,0,0,.0);
    box-shadow: 1px 1px 7px -3px #999;
  }
</style>