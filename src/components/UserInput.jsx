export default function UserInput({ onChangeInput, userInputChange }){
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input 
            type="number" 
            required 
            value={userInputChange.initialInvestment} 
            onChange={(event) => onChangeInput('initialInvestment', event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input 
            type="number" 
            required 
            value={userInputChange.annualInvestment} 
            onChange={(event) => onChangeInput('annualInvestment', event.target.value)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input 
            type="number" 
            required 
            value={userInputChange.expectedReturn} 
            onChange={(event) => onChangeInput('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input 
            type="number" 
            required 
            value={userInputChange.duration} 
            onChange={(event) => onChangeInput('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  )
}