import { React } from "react";

const Filter = () => {
    return(
        <div class="modal">
            <div class="modal-content">
                <form>
                    <div>
                        <label htmlFor="#">Organisation</label><br />
                        <select id="cars" name="cars">
                            <option value="volvo">Volvo</option>
                            <option value="bmw">BMW</option>
                            <option value="audi">Audi</option>
                            <option value="mercedes">Mercedes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="#">Username</label><br />
                        <input type="text" placeholder="Input 1"></input>
                    </div>
                    <div>
                        <label htmlFor="#">Email</label><br />
                        <input type="text" placeholder="Input 1"></input>
                    </div><div>
                        <label htmlFor="#">Date</label><br />
                        <input type="date" placeholder="Input 1"></input>
                    </div><div>
                        <label htmlFor="#">Phone Number</label><br />
                        <input type="text" placeholder="Input 1"></input>
                    </div><div>
                        <label htmlFor="#">Status</label><br />
                        <select id="cars" name="cars">
                            <option value="volvo">Active</option>
                            <option value="bmw">Inactive</option>
                            <option value="audi">Pending</option>
                            <option value="mercedes">Blacklisted</option>
                        </select>
                    </div>
                    <div class="modal-buttons">
                        <button >Reset</button>
                        <button type="submit">Filter</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Filter