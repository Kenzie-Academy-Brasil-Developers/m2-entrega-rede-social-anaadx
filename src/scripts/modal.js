export class Modal {
    static showEditModal() {
      const modal = document.querySelector(".modal")
      
      const modalEditButton = document.querySelector(".esqueciSenha")
      
      modalEditButton.addEventListener('click', () => {
          modal.classList.toggle('hidden')
        })
    }

  
  static closeEditModal() {
    const closeBtn = document.querySelector('.buttonClose')
    const modal = document.querySelector(".modal")

      closeBtn.addEventListener('click', () => {
      
        modal.classList.add('hidden')
        
      })
  
  }
}

Modal.showEditModal()
Modal.closeEditModal()