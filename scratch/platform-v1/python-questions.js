/*
This file contains all questions about Raspberry Pi GPIO and I/O concepts.
*/

/*
This file contains all questions about Raspberry Pi GPIO and I/O concepts.
*/

function shuffle(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
}

let gpio_question_1 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does GPIO stand for?',
    options: [
        'General Purpose Input Output',
        'General Pin Input Output',
        'Global Processing Input Output',
        'General Purpose Internal Output'
    ],
    solution: 'General Purpose Input Output',
    explanation: 'GPIO pins can be programmed as either input or output.',
    randomize() { shuffle(this.options); }
};

let gpio_question_2 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What is the purpose of GPIO pins on the Raspberry Pi?',
    options: [
        'To store files',
        'To communicate with external hardware',
        'To increase CPU speed',
        'To display graphics'
    ],
    solution: 'To communicate with external hardware',
    explanation: 'GPIO connects the Pi to sensors, buttons, LEDs, etc.',
    randomize() { shuffle(this.options); }
};

let gpio_question_3 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What is the difference between INPUT and OUTPUT mode?',
    options: [
        'Input sends signals, Output reads signals',
        'Input reads signals, Output sends signals',
        'Both read signals only',
        'Both send signals only'
    ],
    solution: 'Input reads signals, Output sends signals',
    explanation: 'Input reads external voltage, output drives voltage.',
    randomize() { shuffle(this.options); }
};

let gpio_question_4 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'If a GPIO pin is configured as input, what value does reading it return?',
    options: [
        '0 or 1',
        'Any integer',
        'A voltage value',
        'A string'
    ],
    solution: '0 or 1',
    explanation: 'Digital pins only read LOW (0) or HIGH (1).',
    randomize() { shuffle(this.options); }
};

let gpio_question_5 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'Which register controls GPIO pin mode?',
    options: ['GPSET', 'GPCLR', 'GPFSEL', 'GPLEV'],
    solution: 'GPFSEL',
    explanation: 'GPFSEL sets input/output/alt functions.',
    randomize() { shuffle(this.options); }
};

let gpio_question_6 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What does the GPLEV register do?',
    options: [
        'Sets pins HIGH',
        'Clears pins',
        'Reads current pin values',
        'Selects pin modes'
    ],
    solution: 'Reads current pin values',
    explanation: 'GPLEV shows whether pins are HIGH or LOW.',
    randomize() { shuffle(this.options); }
};

let gpio_question_7 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What happens when writing 1 to GPSET?',
    options: [
        'Sets pin HIGH',
        'Sets pin LOW',
        'Reads pin',
        'Disables pin'
    ],
    solution: 'Sets pin HIGH',
    explanation: 'GPSET only sets bits HIGH.',
    randomize() { shuffle(this.options); }
};

let gpio_question_8 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'How do you set GPIO 17 HIGH?',
    options: [
        'GPSET0 = (1 << 17);',
        'GPCLR0 = (1 << 17);',
        'GPLEV0 = (1 << 17);',
        'GPFSEL0 = (1 << 17);'
    ],
    solution: 'GPSET0 = (1 << 17);',
    explanation: 'Bit shifting targets GPIO 17.',
    randomize() { shuffle(this.options); }
};

let gpio_question_9 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'How do you clear GPIO 17?',
    options: [
        'GPCLR0 = (1 << 17);',
        'GPSET0 = (1 << 17);',
        'GPLEV0 = (1 << 17);',
        'GPFSEL0 = (1 << 17);'
    ],
    solution: 'GPCLR0 = (1 << 17);',
    explanation: 'GPCLR sets pin LOW.',
    randomize() { shuffle(this.options); }
};

let gpio_question_10 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What does (pins & 0x04) check?',
    options: [
        'If bit 0 is set',
        'If bit 1 is set',
        'If bit 2 is set',
        'If all bits are set'
    ],
    solution: 'If bit 2 is set',
    explanation: '0x04 = 00000100.',
    randomize() { shuffle(this.options); }
};

let gpio_question_11 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What does (pins & 0x3f) do?',
    options: [
        'Keeps lowest 6 bits',
        'Clears all bits',
        'Sets all bits',
        'Shifts bits left'
    ],
    solution: 'Keeps lowest 6 bits',
    explanation: '0x3F = 00111111.',
    randomize() { shuffle(this.options); }
};

let gpio_question_12 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'Which sets bit 3 of x?',
    options: [
        'x |= 0x08',
        'x &= 0x08',
        'x ^= 0x08',
        'x = 0x08'
    ],
    solution: 'x |= 0x08',
    explanation: 'OR sets the bit.',
    randomize() { shuffle(this.options); }
};

let gpio_question_13 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'Which clears bit 3 of x?',
    options: [
        'x &= ~0x08',
        'x |= 0x08',
        'x ^= 0x08',
        'x = ~0x08'
    ],
    solution: 'x &= ~0x08',
    explanation: 'AND with inverted mask clears bit.',
    randomize() { shuffle(this.options); }
};

let gpio_question_14 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What is SPI used for?',
    options: [
        'Parallel communication',
        'Synchronous serial communication',
        'Memory storage',
        'Graphics rendering'
    ],
    solution: 'Synchronous serial communication',
    explanation: 'SPI uses clocked data transfer.',
    randomize() { shuffle(this.options); }
};

let gpio_question_15 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'Which are SPI signals?',
    options: [
        'TX, RX',
        'MOSI, MISO, SCLK, CE',
        'SDA, SCL',
        'VCC, GND'
    ],
    solution: 'MOSI, MISO, SCLK, CE',
    explanation: 'Standard SPI lines.',
    randomize() { shuffle(this.options); }
};

let gpio_question_16 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What does CE do in SPI?',
    options: [
        'Selects active device',
        'Controls speed',
        'Stores data',
        'Resets bus'
    ],
    solution: 'Selects active device',
    explanation: 'Only one device listens at a time.',
    randomize() { shuffle(this.options); }
};

let gpio_question_17 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'How many bits does MCP3008 output?',
    options: ['8', '10', '12', '16'],
    solution: '10',
    explanation: 'It is a 10-bit ADC.',
    randomize() { shuffle(this.options); }
};

let gpio_question_18 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'How is the ADC result received?',
    options: [
        'One byte',
        'Two bytes',
        'ASCII',
        'Direct memory'
    ],
    solution: 'Two bytes',
    explanation: 'SPI transfers in bytes.',
    randomize() { shuffle(this.options); }
};

let gpio_question_19 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'Which combines a 10-bit result correctly?',
    options: [
        '((byte2 & 0x03) << 8) | byte3',
        '(byte2 << 8) & byte3',
        '(byte2 | byte3)',
        '(byte2 >> 8) | byte3'
    ],
    solution: '((byte2 & 0x03) << 8) | byte3',
    explanation: 'Top 2 bits + lower 8 bits.',
    randomize() { shuffle(this.options); }
};

let gpio_question_20 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What does uart_puts do?',
    options: [
        'Reads UART data',
        'Sends a string over UART',
        'Initializes UART',
        'Clears UART buffer'
    ],
    solution: 'Sends a string over UART',
    explanation: 'Used for output to serial terminal.',
    randomize() { shuffle(this.options); }
};

let gpio_question_21 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What is busy-waiting?',
    options: [
        'Using interrupts to handle tasks',
        'Looping continuously to delay execution',
        'Sleeping the CPU completely',
        'Using hardware timers only'
    ],
    solution: 'Looping continuously to delay execution',
    explanation: 'Busy-waiting repeatedly checks a condition in a loop, wasting CPU cycles.',
    randomize() { shuffle(this.options); }
};

let gpio_question_22 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What is a major disadvantage of busy-waiting?',
    options: [
        'It is too fast',
        'It cannot run other code at the same time',
        'It uses interrupts',
        'It requires hardware timers'
    ],
    solution: 'It cannot run other code at the same time',
    explanation: 'Busy-waiting blocks the CPU, preventing other tasks from running.',
    randomize() { shuffle(this.options); }
};

let gpio_question_23 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What is the frequency of the Raspberry Pi system timer?',
    options: [
        '1 Hz',
        '1 kHz',
        '1 MHz',
        '1 GHz'
    ],
    solution: '1 MHz',
    explanation: 'The system timer increments every microsecond (1 MHz frequency).',
    randomize() { shuffle(this.options); }
};

let gpio_question_24 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What is the main advantage of hardware timers over busy-waiting?',
    options: [
        'They use more CPU',
        'They allow other code to run simultaneously',
        'They are slower',
        'They require loops'
    ],
    solution: 'They allow other code to run simultaneously',
    explanation: 'Hardware timers run in the background, freeing the CPU.',
    randomize() { shuffle(this.options); }
};

let gpio_question_25 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What does CLO represent in the system timer?',
    options: [
        'High 32 bits of timer',
        'Low 32 bits of timer',
        'Clock frequency',
        'Control register'
    ],
    solution: 'Low 32 bits of timer',
    explanation: 'CLO stores the lower 32 bits of the 64-bit system timer.',
    randomize() { shuffle(this.options); }
};

let gpio_question_26 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What does CHI represent in the system timer?',
    options: [
        'Low 32 bits',
        'High 32 bits',
        'Interrupt flag',
        'Clock divider'
    ],
    solution: 'High 32 bits',
    explanation: 'CHI stores the upper 32 bits of the 64-bit timer value.',
    randomize() { shuffle(this.options); }
};

let gpio_question_27 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'How do you combine CHI and CLO into a 64-bit timer value?',
    options: [
        '(CLO << 32) | CHI',
        '(CHI << 32) | CLO',
        '(CHI & CLO)',
        '(CHI >> 32) | CLO'
    ],
    solution: '(CHI << 32) | CLO',
    explanation: 'The high bits (CHI) are shifted left and combined with low bits (CLO).',
    randomize() { shuffle(this.options); }
};

let gpio_question_28 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'Why is the system timer considered better than a naive delay loop?',
    options: [
        'It uses more CPU cycles',
        'It depends on clock speed',
        'It runs independently of CPU execution',
        'It cannot measure time precisely'
    ],
    solution: 'It runs independently of CPU execution',
    explanation: 'Hardware timers increment in the background regardless of CPU activity.',
    randomize() { shuffle(this.options); }
};

let gpio_question_29 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What unit does the Raspberry Pi system timer use?',
    options: [
        'Milliseconds',
        'Nanoseconds',
        'Microseconds',
        'Seconds'
    ],
    solution: 'Microseconds',
    explanation: 'The timer increments every microsecond (μs precision).',
    randomize() { shuffle(this.options); }
};

let gpio_question_30 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What is required to correctly read a 64-bit timer using two 32-bit registers?',
    options: [
        'Only read CLO',
        'Only read CHI',
        'Combine CHI and CLO properly',
        'Ignore both values'
    ],
    solution: 'Combine CHI and CLO properly',
    explanation: 'You must combine the high and low parts to reconstruct the full 64-bit value.',
    randomize() { shuffle(this.options); }
};

let gpio_question_31 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What does the GPFSEL register control?',
    options: [
        'Pin voltage levels',
        'Pin input/output function',
        'Pin interrupt status',
        'Pin timing delays'
    ],
    solution: 'Pin input/output function',
    explanation: 'GPFSEL registers determine whether a pin is input, output, or alternate function.',
    randomize() { shuffle(this.options); }
};

let gpio_question_32 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'How many GPIO pins are controlled by one GPFSEL register?',
    options: [
        '8',
        '10',
        '16',
        '32'
    ],
    solution: '10',
    explanation: 'Each GPFSEL register controls 10 pins, with 3 bits per pin (10 × 3 = 30 bits).',
    randomize() { shuffle(this.options); }
};

let gpio_question_33 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'How many bits are used to configure a single GPIO pin in GPFSEL?',
    options: [
        '1',
        '2',
        '3',
        '4'
    ],
    solution: '3',
    explanation: 'Each pin uses 3 bits to select input, output, or alternate functions.',
    randomize() { shuffle(this.options); }
};

let gpio_question_34 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What does the value 001 represent in a GPFSEL field?',
    options: [
        'Input',
        'Output',
        'Alternate function 0',
        'Disabled'
    ],
    solution: 'Output',
    explanation: '000 = input, 001 = output, others = alternate functions.',
    randomize() { shuffle(this.options); }
};

let gpio_question_35 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'Which GPFSEL register controls GPIO pin 23?',
    options: [
        'GPFSEL0',
        'GPFSEL1',
        'GPFSEL2',
        'GPFSEL3'
    ],
    solution: 'GPFSEL2',
    explanation: 'Each register handles 10 pins: 20–29 → GPFSEL2.',
    randomize() { shuffle(this.options); }
};

let gpio_question_36 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What is the bit position for GPIO pin 3 inside GPFSEL0?',
    options: [
        '3',
        '6',
        '9',
        '12'
    ],
    solution: '9',
    explanation: 'Each pin uses 3 bits → 3 × 3 = 9.',
    randomize() { shuffle(this.options); }
};

let gpio_question_37 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What does this code do? *GPFSEL0 &= ~(0b111 << 9);',
    options: [
        'Sets pin 3 as output',
        'Clears pin 3 function bits (sets to input)',
        'Sets pin 9 HIGH',
        'Resets entire register'
    ],
    solution: 'Clears pin 3 function bits (sets to input)',
    explanation: 'It clears the 3 bits for pin 3, making it 000 (input).',
    randomize() { shuffle(this.options); }
};

let gpio_question_38 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What does this code do? *GPFSEL0 |= (0b001 << 9);',
    options: [
        'Sets pin 3 as input',
        'Sets pin 3 as output',
        'Clears pin 3',
        'Reads pin 3'
    ],
    solution: 'Sets pin 3 as output',
    explanation: '001 sets the pin function to output.',
    randomize() { shuffle(this.options); }
};

let gpio_question_39 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'Why must you clear bits before setting them in GPFSEL?',
    options: [
        'To avoid CPU crashes',
        'To prevent leftover bits from affecting configuration',
        'To speed up execution',
        'To reset the entire GPIO system'
    ],
    solution: 'To prevent leftover bits from affecting configuration',
    explanation: 'You must clear old bits first or you might get incorrect function values.',
    randomize() { shuffle(this.options); }
};

let gpio_question_40 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'Which expression correctly calculates the register index for a GPIO pin?',
    options: [
        'pin % 10',
        'pin / 10',
        'pin * 3',
        'pin << 3'
    ],
    solution: 'pin / 10',
    explanation: 'Each GPFSEL handles 10 pins, so divide by 10 to find the register.',
    randomize() { shuffle(this.options); }
};
let gpio_question_41 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does UART stand for?',
    options: [
        'Universal Asynchronous Receiver/Transmitter',
        'Unified Asynchronous Routing Tool',
        'Universal Analog Receiver/Transmitter',
        'Unified Analog Routing Tool'
    ],
    solution: 'Universal Asynchronous Receiver/Transmitter',
    explanation: 'UART is a serial communication protocol used for low-speed data transfer.',
    randomize() { shuffle(this.options); }
};

let gpio_question_42 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What type of communication does UART use?',
    options: [
        'Parallel',
        'Synchronous serial',
        'Asynchronous serial',
        'Wireless'
    ],
    solution: 'Asynchronous serial',
    explanation: 'UART does not use a shared clock, making it asynchronous.',
    randomize() { shuffle(this.options); }
};

let gpio_question_43 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What is the purpose of UART?',
    options: [
        'Convert analog to digital signals',
        'Convert between parallel and serial data',
        'Control GPIO pins',
        'Increase CPU speed'
    ],
    solution: 'Convert between parallel and serial data',
    explanation: 'UART converts parallel data into serial form and vice versa.',
    randomize() { shuffle(this.options); }
};

let gpio_question_44 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What does TX represent in UART?',
    options: [
        'Receive data',
        'Transmit data',
        'Timing signal',
        'Reset signal'
    ],
    solution: 'Transmit data',
    explanation: 'TX sends data from the device.',
    randomize() { shuffle(this.options); }
};

let gpio_question_45 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What does RX represent in UART?',
    options: [
        'Receive data',
        'Transmit data',
        'Clock signal',
        'Power signal'
    ],
    solution: 'Receive data',
    explanation: 'RX receives incoming serial data.',
    randomize() { shuffle(this.options); }
};

let gpio_question_46 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What is the idle state of a UART line?',
    options: [
        '0',
        '1',
        'Floating',
        'Alternating'
    ],
    solution: '1',
    explanation: 'UART idle state is HIGH (1).',
    randomize() { shuffle(this.options); }
};

let gpio_question_47 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What value is the start bit in UART?',
    options: [
        '1',
        '0',
        'Depends on baud rate',
        'Random'
    ],
    solution: '0',
    explanation: 'Start bit is LOW to signal transmission start.',
    randomize() { shuffle(this.options); }
};

let gpio_question_48 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What is the purpose of stop bits?',
    options: [
        'Start transmission',
        'End transmission and return line to idle',
        'Increase speed',
        'Store data'
    ],
    solution: 'End transmission and return line to idle',
    explanation: 'Stop bits are HIGH and signal the end of a frame.',
    randomize() { shuffle(this.options); }
};

let gpio_question_49 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What is baud rate?',
    options: [
        'Voltage level',
        'Bits per second',
        'Clock cycles',
        'Memory size'
    ],
    solution: 'Bits per second',
    explanation: 'Baud rate measures transmission speed.',
    randomize() { shuffle(this.options); }
};

let gpio_question_50 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'In digital UART systems, 1 baud equals:',
    options: [
        '1 byte/sec',
        '1 bit/sec',
        '8 bits/sec',
        'Variable'
    ],
    solution: '1 bit/sec',
    explanation: 'In digital systems, baud equals bits per second.',
    randomize() { shuffle(this.options); }
};

let gpio_question_51 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What is the Mini UART primarily used for?',
    options: [
        'High-speed networking',
        'Console communication',
        'Graphics processing',
        'Memory management'
    ],
    solution: 'Console communication',
    explanation: 'Mini UART is used as a simple console interface.',
    randomize() { shuffle(this.options); }
};

let gpio_question_52 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What is a limitation of the Mini UART?',
    options: [
        'Too fast',
        'Lacks full UART features',
        'Consumes too much power',
        'Cannot send data'
    ],
    solution: 'Lacks full UART features',
    explanation: 'Mini UART is simpler and less feature-rich than PL011.',
    randomize() { shuffle(this.options); }
};

let gpio_question_53 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'How many bits can Mini UART operate with?',
    options: [
        '5 or 6',
        '7 or 8',
        '9 or 10',
        '16'
    ],
    solution: '7 or 8',
    explanation: 'Mini UART supports 7 or 8-bit data.',
    randomize() { shuffle(this.options); }
};

let gpio_question_54 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'How many start bits does Mini UART use?',
    options: ['0', '1', '2', 'Variable'],
    solution: '1',
    explanation: 'Mini UART uses exactly one start bit.',
    randomize() { shuffle(this.options); }
};

let gpio_question_55 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'Does Mini UART use parity bits?',
    options: ['Yes', 'No', 'Optional', 'Only for RX'],
    solution: 'No',
    explanation: 'Mini UART does not support parity bits.',
    randomize() { shuffle(this.options); }
};

let gpio_question_56 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What register enables Mini UART and SPI?',
    options: [
        'GPFSEL',
        'AUX_ENABLES',
        'GPLEV',
        'UART_CTRL'
    ],
    solution: 'AUX_ENABLES',
    explanation: 'AUX_ENABLES controls auxiliary peripherals.',
    randomize() { shuffle(this.options); }
};

let gpio_question_57 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'How many PL011 UARTs are on Raspberry Pi 4?',
    options: ['1', '2', '3', '5'],
    solution: '5',
    explanation: 'RPi4 includes UART0 and UART2–5.',
    randomize() { shuffle(this.options); }
};

let gpio_question_58 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'PL011 UART is:',
    options: [
        'Simpler than Mini UART',
        'More feature-complete',
        'Deprecated',
        'Used only for SPI'
    ],
    solution: 'More feature-complete',
    explanation: 'PL011 supports more features than Mini UART.',
    randomize() { shuffle(this.options); }
};

let gpio_question_59 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What command opens a UART terminal on Linux?',
    options: [
        'uart /dev/ttyUSB1',
        'screen /dev/ttyUSB1 115200',
        'open ttyUSB1',
        'connect serial'
    ],
    solution: 'screen /dev/ttyUSB1 115200',
    explanation: 'This connects to UART at 115200 baud.',
    randomize() { shuffle(this.options); }
};

let gpio_question_60 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What does CTS (Clear To Send) control?',
    options: [
        'Receiver readiness',
        'Transmitter permission to send',
        'Clock speed',
        'Memory buffer'
    ],
    solution: 'Transmitter permission to send',
    explanation: 'If CTS is 0, transmitter stops sending.',
    randomize() { shuffle(this.options); }
};
let gpio_question_61 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does I2C stand for?',
    options: [
        'Inter-integrated Circuit',
        'Internal Integrated Controller',
        'Interconnected Circuit Controller',
        'Integrated Interface Circuit'
    ],
    solution: 'Inter-integrated Circuit',
    explanation: 'I2C stands for Inter-integrated Circuit, a communication protocol.',
    randomize() { shuffle(this.options); }
};

let gpio_question_62 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'How many wires are used in I2C communication (excluding power)?',
    options: ['1', '2', '3', '4'],
    solution: '2',
    explanation: 'I2C uses SDA (data) and SCL (clock).',
    randomize() { shuffle(this.options); }
};

let gpio_question_63 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does SDA stand for?',
    options: [
        'Serial Data',
        'System Data Access',
        'Synchronous Data',
        'Serial Device Address'
    ],
    solution: 'Serial Data',
    explanation: 'SDA carries the data in I2C.',
    randomize() { shuffle(this.options); }
};

let gpio_question_64 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does SCL stand for?',
    options: [
        'Serial Clock',
        'System Clock Line',
        'Synchronous Clock Logic',
        'Serial Control Line'
    ],
    solution: 'Serial Clock',
    explanation: 'SCL provides the clock signal for synchronization.',
    randomize() { shuffle(this.options); }
};

let gpio_question_65 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'Why must each I2C device have a unique address?',
    options: [
        'To increase speed',
        'To avoid data collisions',
        'To reduce power usage',
        'To simplify wiring'
    ],
    solution: 'To avoid data collisions',
    explanation: 'Unique addresses allow multiple devices on the same bus.',
    randomize() { shuffle(this.options); }
};

let gpio_question_66 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What is the standard I2C address size?',
    options: ['4-bit', '7-bit', '8-bit', '16-bit'],
    solution: '7-bit',
    explanation: 'Most I2C devices use 7-bit addressing.',
    randomize() { shuffle(this.options); }
};

let gpio_question_67 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What is an alternative I2C addressing mode?',
    options: ['6-bit', '8-bit', '10-bit', '12-bit'],
    solution: '10-bit',
    explanation: 'I2C can also use 10-bit addressing.',
    randomize() { shuffle(this.options); }
};

let gpio_question_68 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'How many data bits are transferred in I2C?',
    options: ['4', '7', '8', '16'],
    solution: '8',
    explanation: 'I2C always transfers 8-bit data.',
    randomize() { shuffle(this.options); }
};

let gpio_question_69 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What is the standard I2C speed?',
    options: [
        '10 kbit/s',
        '100 kbit/s',
        '1 Mbit/s',
        '10 Mbit/s'
    ],
    solution: '100 kbit/s',
    explanation: 'Standard mode runs at 100 kbit/s.',
    randomize() { shuffle(this.options); }
};

let gpio_question_70 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What is Fast Mode I2C speed?',
    options: [
        '200 kbit/s',
        '400 kbit/s',
        '800 kbit/s',
        '1 Mbit/s'
    ],
    solution: '400 kbit/s',
    explanation: 'Fast mode operates at 400 kbit/s.',
    randomize() { shuffle(this.options); }
};

let gpio_question_71 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What is the first step in an I2C write operation?',
    options: [
        'Send data',
        'Send device address',
        'Send register address',
        'Read data'
    ],
    solution: 'Send device address',
    explanation: 'Communication starts by addressing the device.',
    randomize() { shuffle(this.options); }
};

let gpio_question_72 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What is the second step in I2C writing?',
    options: [
        'Send data',
        'Send register address',
        'Send clock signal',
        'Receive data'
    ],
    solution: 'Send register address',
    explanation: 'This specifies where inside the device to write.',
    randomize() { shuffle(this.options); }
};

let gpio_question_73 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What is the final step in I2C writing?',
    options: [
        'Receive data',
        'Send data',
        'Send stop bit',
        'Reset bus'
    ],
    solution: 'Send data',
    explanation: 'The actual data is written last.',
    randomize() { shuffle(this.options); }
};

let gpio_question_74 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'In I2C reading, what happens after sending register address?',
    options: [
        'Send data',
        'Listen for data',
        'Reset bus',
        'Increase clock speed'
    ],
    solution: 'Listen for data',
    explanation: 'Device sends data back to master.',
    randomize() { shuffle(this.options); }
};

let gpio_question_75 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'What controller is used for I2C on Raspberry Pi?',
    options: [
        'SPI',
        'UART',
        'BSC',
        'GPIO'
    ],
    solution: 'BSC',
    explanation: 'BSC = Broadcom Serial Controller.',
    randomize() { shuffle(this.options); }
};

let gpio_question_76 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    question: 'Which GPIO pins are typically used for I2C on Raspberry Pi?',
    options: [
        'GPIO0 & GPIO1',
        'GPIO2 & GPIO3',
        'GPIO4 & GPIO5',
        'GPIO6 & GPIO7'
    ],
    solution: 'GPIO2 & GPIO3',
    explanation: 'These are the default I2C pins.',
    randomize() { shuffle(this.options); }
};

let gpio_question_77 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What mode must GPIO pins be set to for I2C?',
    options: [
        'Input',
        'Output',
        'Alternate function',
        'Disabled'
    ],
    solution: 'Alternate function',
    explanation: 'I2C uses alternate pin functions.',
    randomize() { shuffle(this.options); }
};

let gpio_question_78 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What does BSC stand for?',
    options: [
        'Basic Serial Communication',
        'Broadcom Serial Controller',
        'Binary Signal Controller',
        'Bus System Controller'
    ],
    solution: 'Broadcom Serial Controller',
    explanation: 'This is the hardware module for I2C.',
    randomize() { shuffle(this.options); }
};

let gpio_question_79 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What is a key advantage of I2C?',
    options: [
        'Requires many wires',
        'Supports multiple devices on same bus',
        'Only works with one device',
        'No addressing needed'
    ],
    solution: 'Supports multiple devices on same bus',
    explanation: 'Multiple devices share SDA and SCL.',
    randomize() { shuffle(this.options); }
};

let gpio_question_80 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    question: 'What is required for communication between I2C devices?',
    options: [
        'Same voltage only',
        'Unique addresses and shared bus',
        'Separate wires for each device',
        'Only UART connection'
    ],
    solution: 'Unique addresses and shared bus',
    explanation: 'Devices communicate using shared lines and unique IDs.',
    randomize() { shuffle(this.options); }
};

export function python_question_generator(){
    console.log(`GPIO/I-O questions selected.`);
    
    return [
        gpio_question_1, gpio_question_2, gpio_question_3, gpio_question_4,
        gpio_question_5, gpio_question_6, gpio_question_7, gpio_question_8,
        gpio_question_9, gpio_question_10, gpio_question_11, gpio_question_12,
        gpio_question_13, gpio_question_14, gpio_question_15, gpio_question_16,
        gpio_question_17, gpio_question_18, gpio_question_19, gpio_question_20,
        gpio_question_21, gpio_question_22, gpio_question_23, gpio_question_24,
        gpio_question_25, gpio_question_26, gpio_question_27, gpio_question_28,
        gpio_question_29, gpio_question_30,
        gpio_question_31, gpio_question_32, gpio_question_33, gpio_question_34,
        gpio_question_35, gpio_question_36, gpio_question_37, gpio_question_38,
        gpio_question_39, gpio_question_40,
        gpio_question_41, gpio_question_42, gpio_question_43, gpio_question_44,
        gpio_question_45, gpio_question_46, gpio_question_47, gpio_question_48,
        gpio_question_49, gpio_question_50,
        gpio_question_51, gpio_question_52, gpio_question_53, gpio_question_54,
        gpio_question_55, gpio_question_56, gpio_question_57, gpio_question_58,
        gpio_question_59, gpio_question_60,
        gpio_question_61, gpio_question_62, gpio_question_63, gpio_question_64,
        gpio_question_65, gpio_question_66, gpio_question_67, gpio_question_68,
        gpio_question_69, gpio_question_70,
        gpio_question_71, gpio_question_72, gpio_question_73, gpio_question_74,
        gpio_question_75, gpio_question_76, gpio_question_77, gpio_question_78,
        gpio_question_79, gpio_question_80
    ];
};