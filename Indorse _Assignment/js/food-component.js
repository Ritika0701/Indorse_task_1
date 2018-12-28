Vue.component('food-component',{
    template: '#food_component',
    data: function(){
        return {
            itemlist: [],
            selectedItem:'',
            itemdetail:{},
            itemingredients:[],
            itemrank: 1,
            orderedlist:[]
        };
            
    },
    created: function(){
        this.reset();
    },

    methods: {
        reset:function(){
            var _this = this;
            $.getJSON( '../data/data.json', function(data){
                _this.itemlist = data.items;
                _this.orderedlist = _.orderBy(_this.itemlist, 'calories', 'desc'); 
            });

        },
        onChange:function(item){
            console.log(item);
            var _this = this;
            var itemexist = false;
            for (i=0; i<_this.itemlist.length; i++){
                if (_this.itemlist[i].name == item) {
                    _this.itemdetail = _this.itemlist[i];
                    _this.itemingredients = _this.itemlist[i].ingredients;
                    break
                }
            }
            for (i=0; i<_this.orderedlist.length; i++) {
                if (_this.orderedlist[i].name == item){
                    _this.itemrank = i + 1;
                    break
                }
            }

        }

	}
});

