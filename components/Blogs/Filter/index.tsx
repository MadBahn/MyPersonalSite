import "./index.scss";

export default defineComponent((props, {attrs}) => {
//    可能需要与pinia联动

    return () => (
        <div>
            filter
            <div>
                <input type="date"/>
            </div>
            <div>
                <input placeholder="search"/>
            </div>
            <div>
                <select>
                    <option>a</option>
                    <option>b</option>
                    <option>c</option>
                </select>
            </div>
        </div>
    );
});

/*
<div>
    filter
    <div>
        <input type="date"/>
    </div>
    <div>
        <input placeholder="search"/>
    </div>
    <div>
        <select>
            <option>a</option>
            <option>b</option>
            <option>c</option>
        </select>
    </div>
</div>
*/