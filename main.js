var add = document.getElementById("add-task-btn");
var inputTask = document.getElementById("input-task");
var ulTasks = document.getElementById("tasks");
var selectAll = document.querySelector('.select_all');
var delAll = document.querySelector('.delete');
add.addEventListener("click", () => {
  if (inputTask.value == "") {
    document.getElementById("error").style.display = "block";
  } else {
    ulTasks.insertAdjacentHTML(
      "afterbegin",
      `<li class="task"><input type="checkbox" id="value">${inputTask.value}<button><i class="fa fa-trash"></i></button></li>`
    );
    inputTask.value = '';
    selectAll.style.display = 'flex';
    var dels = document.querySelectorAll('i[class="fa fa-trash"]');
    var checkBoxs = document.querySelectorAll('input[id="value"]');
    var lis = document.getElementsByClassName('task');
    if (dels) {
        Array.from(dels).forEach(function(del){
            del.onclick = (e) => {
                elementParent = getParent(e.target,'task');
                ulTasks.removeChild(elementParent);
                if(lis.length == 0){
                    selectAll.style.display = 'none';
                }
            }
        })
    }
    var checkAll = document.getElementById('all');
    if(checkBoxs){
        checkAll.onclick = () => {
            if(checkAll.checked){
                Array.from(checkBoxs).forEach(function(checkBox){
                    checkBox.checked = true;
                })
            }else{
                Array.from(checkBoxs).forEach(function(checkBox){
                    checkBox.checked = false;
                })
            }
        }
    }
    if(lis){
        delAll.onclick = () => {
            Array.from(checkBoxs).forEach(function(checkBox){
                if(checkBox.checked){
                    elementParent = getParent(checkBox,'task');
                    ulTasks.removeChild(elementParent);
                    checkAll.checked = false;
                    checkBoxs = document.querySelectorAll('input[id="value"]');
                    if(checkBoxs.length == 0){
                        selectAll.style.display = 'none';
                    }
                }
            })
        }
    }
  }
});

inputTask.oninput = () => {
  document.getElementById("error").style.display = "none";
};

function getParent(element,classEle) {
    while(element.parentElement){
        if(element.parentElement.className == classEle){ 
            return element.parentElement;
        }
        element = element.parentElement;
    }
}
