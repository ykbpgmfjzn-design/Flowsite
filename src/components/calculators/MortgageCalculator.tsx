"use client"

import { useState, useMemo } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Building2, TrendingUp, DollarSign } from "lucide-react"

export function MortgageCalculator() {
    const [loanAmount, setLoanAmount] = useState(300000)
    const [interestRate, setInterestRate] = useState(5.5)
    const [loanTerm, setLoanTerm] = useState(15) // Years

    const monthlyPayment = useMemo(() => {
        // Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
        // P = Loan Amount
        // i = monthly interest rate (annual / 12 / 100)
        // n = total no. of payments (years * 12)

        const principal = loanAmount
        const monthlyInterest = interestRate / 100 / 12
        const numberOfPayments = loanTerm * 12

        if (interestRate === 0) {
            return principal / numberOfPayments
        }

        const x = Math.pow(1 + monthlyInterest, numberOfPayments)
        const monthly = (principal * x * monthlyInterest) / (x - 1)

        return monthly
    }, [loanAmount, interestRate, loanTerm])

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
    }

    return (
        <div className="relative group/calc">
            {/* Animated glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover/calc:opacity-20 transition-opacity duration-700" />

            <Card className="relative p-6 md:p-8 bg-white border-2 border-transparent hover:border-purple-100 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group-hover/calc:scale-[1.01]">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-100/50 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-100/50 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6 group/header">
                        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover/header:scale-110 group-hover/header:rotate-12 transition-all duration-500">
                            <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Mortgage Estimator
                            </h3>
                            <p className="text-sm text-gray-500">Calculate your monthly payments</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Controls */}
                        <div className="space-y-8">
                            {/* Loan Amount */}
                            <div className="space-y-4 group/field">
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-600 uppercase tracking-wider group-hover/field:text-purple-600 transition-colors duration-300">
                                        <DollarSign className="w-4 h-4 text-purple-500 group-hover/field:scale-125 transition-transform duration-300" />
                                        Loan Amount
                                    </label>
                                    <span className="text-xl font-bold font-heading bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover/field:scale-110 transition-transform duration-300">
                                        {formatCurrency(loanAmount)}
                                    </span>
                                </div>
                                <div className="relative">
                                    <div className="absolute -inset-x-2 h-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-sm opacity-0 group-hover/field:opacity-100 transition-opacity duration-300" />
                                    <Slider
                                        value={[loanAmount]}
                                        max={1000000}
                                        min={50000}
                                        step={5000}
                                        onValueChange={(val) => setLoanAmount(val[0])}
                                        className="py-4 relative z-10"
                                    />
                                </div>
                            </div>

                            {/* Interest Rate */}
                            <div className="space-y-4 group/field">
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-600 uppercase tracking-wider group-hover/field:text-cyan-600 transition-colors duration-300">
                                        <TrendingUp className="w-4 h-4 text-cyan-500 group-hover/field:scale-125 transition-transform duration-300" />
                                        Interest Rate (%)
                                    </label>
                                    <span className="text-xl font-bold font-heading bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover/field:scale-110 transition-transform duration-300">
                                        {interestRate}%
                                    </span>
                                </div>
                                <div className="relative">
                                    <div className="absolute -inset-x-2 h-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-sm opacity-0 group-hover/field:opacity-100 transition-opacity duration-300" />
                                    <Slider
                                        value={[interestRate]}
                                        max={12}
                                        min={1}
                                        step={0.1}
                                        onValueChange={(val) => setInterestRate(val[0])}
                                        className="py-4 relative z-10"
                                    />
                                </div>
                            </div>

                            {/* Loan Term */}
                            <div className="space-y-4 group/field">
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-600 uppercase tracking-wider group-hover/field:text-pink-600 transition-colors duration-300">
                                        <Building2 className="w-4 h-4 text-pink-500 group-hover/field:scale-125 transition-transform duration-300" />
                                        Loan Term (Years)
                                    </label>
                                    <span className="text-xl font-bold font-heading bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent group-hover/field:scale-110 transition-transform duration-300">
                                        {loanTerm} Years
                                    </span>
                                </div>
                                <div className="relative">
                                    <div className="absolute -inset-x-2 h-2 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-sm opacity-0 group-hover/field:opacity-100 transition-opacity duration-300" />
                                    <Slider
                                        value={[loanTerm]}
                                        max={30}
                                        min={1}
                                        step={1}
                                        onValueChange={(val) => setLoanTerm(val[0])}
                                        className="py-4 relative z-10"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Results Grid with Animated Background */}
                        <div className="relative bg-gradient-to-br from-secondary via-purple-900 to-secondary rounded-2xl p-8 text-white flex flex-col justify-center space-y-8 overflow-hidden group/result shadow-2xl">
                            {/* Animated background shapes */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float-slow" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-float-delayed" />

                            <div className="relative z-10 group/payment">
                                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2 group-hover/payment:text-cyan-300 transition-colors duration-300">
                                    Estimated Monthly Payment
                                </p>
                                <div className="relative inline-block">
                                    <p className="text-5xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x group-hover/payment:scale-105 transition-transform duration-500">
                                        {formatCurrency(monthlyPayment)}
                                    </p>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover/payment:opacity-100 transition-opacity duration-500" />
                                </div>
                                <p className="text-sm text-gray-400 mt-2">Principal & Interest Only</p>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full" />

                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                <div className="group/total p-4 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1 group-hover/total:text-purple-300 transition-colors duration-300">
                                        Total Payment
                                    </p>
                                    <p className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                                        {formatCurrency(monthlyPayment * loanTerm * 12)}
                                    </p>
                                </div>
                                <div className="group/interest p-4 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1 group-hover/interest:text-cyan-300 transition-colors duration-300">
                                        Total Interest
                                    </p>
                                    <p className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                                        {formatCurrency((monthlyPayment * loanTerm * 12) - loanAmount)}
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 bg-white/10 rounded-lg p-4 text-xs text-gray-400 leading-relaxed backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300">
                                <div className="flex items-start gap-2">
                                    <span className="text-yellow-400 text-lg">ℹ️</span>
                                    <p>This is an estimate only. Actual rates depend on credit score, down payment, and lender terms in Indonesia (or your home country).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
