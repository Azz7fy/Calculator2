import React, { useState } from 'react';

export default function App() {
	const [value, setValue] = useState('');

	function newValue(event) {
		const clickedValue = event.target.value;
		setValue((prevValue) => prevValue + clickedValue);
	}

	return (
		<body class='min-h-screen bg-[#0F172A]'>
			<div className='px-24 py-16'>
				<form className='content-normal' action=''>
					<div className=''>
						<input className="rounded my-8 w-72 h-12 text-2xl" type='text' value={value} />
					</div>

					<div>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='CE'
							onClick={(e) => setValue('')}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='DE'
							onClick={(e) => setValue(value.slice(0, -1))}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='.'
							onClick={newValue}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='/'
							onClick={newValue}
						/>
					</div>
					<div>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='7'
							onClick={newValue}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='8'
							onClick={newValue}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='9'
							onClick={newValue}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='*'
							onClick={newValue}
						/>
					</div>
					<div>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='4'
							onClick={newValue}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='5'
							onClick={newValue}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='6'
							onClick={newValue}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='+'
							onClick={newValue}
						/>
					</div>
					<div>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='1'
							onClick={newValue}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='2'
							onClick={newValue}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='3'
							onClick={newValue}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='-'
							onClick={newValue}
						/>
					</div>
					<div>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='00'
							onClick={newValue}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='0'
							onClick={newValue}
						/>
						<input
							className='font-bold m-1 text-white text-2xl bg-[#0EA5E9] rounded-lg box-border h-16 w-16'
							type='button'
							value='='
							onClick={(e) => setValue(eval(value))}
						/>
					</div>
				</form>
			</div>
		</body>
	);
}
