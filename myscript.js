const scroller = scrollama();
const scroller2 = scrollama();

scroller
  .setup({
    step: ".text",
    offset: 0.7,
  })
  .onStepEnter(response => {
    // { element, index, direction }
    el=response.element;
    el.style.opacity=1;
    el.style.marginTop='-20px';    
  })
  .onStepExit(response => {
    // { element, index, direction }  
    el=response.element;
  })
  ;
 // setup resize event
window.addEventListener("resize", scroller.resize);

scroller2
  .setup({
    step: ".progressive",
    offset: 0.6,
  })
  .onStepEnter(response => {
    // { element, index, direction }
    el=response.element;
    el.style.opacity=1;
    if(response.index==0 || 1 || 2){
    	stick('dynamic_sticky1')
    	response.direction=='down'
    	if(response.index==0){
    		count(1,15,1,'The livestock industry generates','of all manmade carbon emissions','dynamic_sticky1')
    	} else if (response.index==1){
    		count(0,30,2,'Of all the food produced,','goes unused','dynamic_sticky1')
    	} else if (response.index==2){
    		count(1,11,1,'Transportation accounts for up to','of the carbon emissions of food prroduction','dynamic_sticky1')
    	}
    }
  })
  .onStepExit(response => {
    // { element, index, direction }  
    el=response.element;
    console.log(response.index)
    if(response.index==2){
    	unstick('dynamic_sticky1')
    }
    el.style.opacity=0;
  })
  ;
 // setup resize event
window.addEventListener("resize", scroller2.resize);

function count(number1, number2, step, title, label, location_id, prefix='', suffix='%'){
	target = document.querySelector('#'+location_id)
	console.log(target)
	let text=number1;

	setInterval(function(){
		if(text!=number2){
			num = text+step
			if(num % 1 == 0){
				text = num
			} else {
				text = parseFloat(num.toFixed(2))
			}
			target.innerHTML="<div class='aligner'><h1>"+title+"</h1><div id='counter'>"+prefix+text+suffix+"</div><h2>"+label+"</h2></div>"
		}
	}, 30);
}

function stick(location_id){
	target = document.querySelector('#'+location_id)
	target.style.position="sticky"
}

function unstick(location_id){
	target = document.querySelector('#'+location_id)
	target.style.position="relative"
}

document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
        if (target.hasAttribute('data-target')) {
            var m_ID = target.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();
        }
    }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
        var modal = document.querySelector('[class="modal open"]');
        modal.classList.remove('open');
        e.preventDefault();
    }
}, false);