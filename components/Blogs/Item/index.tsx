import "./index.scss";

export default defineComponent({
    props: {
        a: String,
        blogDetail: Object
    },
    emits: [],
    setup: (props, {emit}) => {
        const {blogDetail} = props;
        
//        处理点击事件
        const doClick = () => {
            console.log("blog items", blogDetail);
        };
        
        return () => (
            <div class="border-l my-10 p-1 blog-items" onClick={doClick}>
                <div class="blog-info">
                    <div>title</div>
                    <div>tags</div>
                </div>
                <div class="blog-author">
                    <div>author</div>
                    <div>date</div>
                </div>
                <div class="blog-comment">
                    <div>last comment by</div>
                    <div>last comment date</div>
                </div>
            </div>
        );
    }
});

/*
<div class="border-l my-10 p-1 blog-items">
            <div class="blog-info">
                <div>title</div>
                <div>tags</div>
            </div>
            <div class="blog-author">
                <div>author</div>
                <div>date</div>
            </div>
            <div class="blog-comment">
                <div>last comment by</div>
                <div>last comment date</div>
            </div>
        </div>

*/